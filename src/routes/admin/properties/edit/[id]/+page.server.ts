// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import type { Actions, PageServerLoad } from './$types';

export const load = (async ({ locals, params }) => {
	const fetchData = async (table, select, id) => {
		const query = locals.sb.from(table).select(select || '*');
		if (id) {
			query.eq('id', id);
		}
		return query;
	};

	const [provincias, tipos, propiedades] = await Promise.all([
		fetchData('Provincias'),
		fetchData('Tipos'),
		fetchData('Propiedades', '*', params.id)
	]);

	return {
		status: 200,
		provincias: provincias.data,
		tipos: tipos.data,
		propiedad: propiedades.data[0]
	};
}) satisfies PageServerLoad;

export const actions: Actions = {
	edit: async ({ request, locals }) => {
		const formData = await request.formData();
		const images = formData.getAll('imagesToAdd');
		const imagesToDelete = formData.getAll('imagesToDelete');
		const property = JSON.parse(formData.get('property'));
		const names = [];
		let imagesObj = [];

		await Promise.allSettled(
			images.map((image, index) => {
				const name = property.titulo + '/' + index + Date.now();
				names.push(name);
				locals.sb.storage.from('properties').upload(name, image);
				const url = locals.sb.storage.from('properties').getPublicUrl(name);
				imagesObj.push({ src: url.data.publicUrl, fileName: name });
			})
		);

		imagesObj = [...property.imagenes, ...imagesObj];

		const objectsToDelete = Array(...property.imagenes).filter((image) =>
			imagesToDelete.includes(image.src)
		);

		const fileNamesToDelete = objectsToDelete.map((objeto) => objeto.fileName);

		imagesObj = imagesObj.filter(
			(item2) => !objectsToDelete.some((item1) => item1.src === item2.src)
		);

		console.log(fileNamesToDelete);
		console.log(imagesObj);

		const { error: errorStorange } = await locals.sb.storage
			.from('properties')
			.remove(fileNamesToDelete);

		if (!errorStorange) {
			imagesObj = imagesObj.filter(
				(item2) => !objectsToDelete.some((item1) => item1.src === item2.src)
			);
		}
		console.log(property);
		const { data, error } = await locals.sb
			.from('Propiedades')
			.update({
				titulo: property.titulo,
				descripcion: property.descripcion,
				id_canton: property.id_canton,
				id_provincia: property.id_provincia,
				id_parroquia: property.id_parroquia,
				id_tipo: property.id_tipo,
				latitud: property.latitud,
				longitud: property.longitud,
				en_venta: property.en_venta,
				en_renta: property.en_renta,
				precio_renta: property.precio_renta,
				precio_venta: property.precio_venta,
				area: property.area,
				banios: property.banios,
				garage: property.garage,
				cuartos: property.cuartos,
				etiquetas: property.etiquetas,
				imagenes: imagesObj,
				referencias: property.referencias
			})
			.eq('id', property.id);

		return {
			status: 200
		};
	}
} satisfies Actions;
