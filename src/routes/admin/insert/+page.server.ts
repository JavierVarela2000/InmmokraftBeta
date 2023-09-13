// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import type { Actions, PageServerLoad } from './$types';

interface Property {
	id: number;
	latitud: number;
	longitud: number;
	typeId: number;
	tittle: string;
	inRent: boolean;
	rentPrice: string;
	inSale: boolean;
	idProvincia: number;
	idCanton: number;
	idParroquia: number;
	salePrice: string;
	description: string;
	rooms: number;
	bathrooms: number;
	garage: number;
	area: number;
	badges: Array;
	zoom: number;
}

export const load = (async ({ locals }) => {
	const fetchData = async (table, select) => {
		return locals.sb.from(table).select(select || '*');
	};

	const [provincias, tipos] = await Promise.all([fetchData('Provincias'), fetchData('Tipos')]);

	return {
		status: 200,
		provincias: provincias.data,
		tipos: tipos.data
	};
}) satisfies PageServerLoad;

export const actions: Actions = {
	insert: async ({ request, locals }) => {
		const formData = await request.formData();
		const lastId = await locals.sb
			.from('Propiedades')
			.select('id')
			.order('id', { ascending: false })
			.limit(1);

		const images = formData.getAll('images');

		const property: Property = JSON.parse(formData.get('property'));

		property.id = lastId.data?.length === 0 ? 1 : lastId.data[0].id + 1;

		const names = [];
		const imgObjs = [];
		await Promise.all(
			images.map((image, index) => {
				const name = property.tittle + '/' + index + Date.now();
				names.push(name);
				locals.sb.storage.from('properties').upload(name, image);
			})
		);
		names.forEach((name) => {
			const url = locals.sb.storage.from('properties').getPublicUrl(name);
			imgObjs.push({ src: url.data.publicUrl, fileName: name });
		});

		const { data, error } = await locals.sb.from('Propiedades').insert([
			{
				descripcion: property.description,
				etiquetas: property.badges,
				id_canton: property.idCanton,
				id_parroquia: property.idParroquia,
				id_provincia: property.idProvincia,
				id_tipo: property.typeId,
				latitud: property.latitud,
				longitud: property.longitud,
				titulo: property.tittle,
				en_venta: property.inSale,
				en_renta: property.inRent,
				precio_venta: property.salePrice,
				precio_renta: property.rentPrice,
				area: property.area,
				banios: property.bathrooms,
				garage: property.garage,
				cuartos: property.rooms,
				zoom: property.zoom,
				imagenes: imgObjs,
				referencias: property.references
			}
		]);

		return {
			status: 200
		};
	}
} satisfies Actions;
