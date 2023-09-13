// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load = (async ({ locals, params }) => {
	const getProperties = async () => {
		const page = Number(params.page);

		const query = locals.sb
			.from('Propiedades')
			.select(
				`id,created_at,titulo,imagenes,
          Provincias (
            nombre
          ),
          Parroquias (
            nombre
          ),Cantones (
            nombre
          )`,
				{ count: 'exact' }
			)
			.range(page * 15 - 15, page * 15)
			.order('id', { ascending: true });

		const { data, error, count: totalItems } = await query;
		return { data, totalItems };
	};

	const { data: properties, totalItems } = await getProperties();

	return { properties, totalItems };
}) satisfies PageServerLoad;

export const actions: Actions = {
	delete: async ({ request, locals }) => {
		const formData = await request.formData();

		const id = formData.get('id');
		const file_names = formData.getAll('fileNames');

		const { data, error } = await locals.sb.from('Propiedades').delete().eq('id', id);

		const { data: dataStorange, error: errorStorange } = await locals.sb.storage
			.from('properties')
			.remove(file_names);

		if (error) {
			return fail(500, { error, message: 'something was wrong deleting from database' });
		}
		if (errorStorange) {
			return fail(500, { error, message: 'something was wrong deleting from Storange' });
		}

		return {
			status: 200,
			data: data,
			dataStorange: dataStorange
		};
	}
} satisfies Actions;
