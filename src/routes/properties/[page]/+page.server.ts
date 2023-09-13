import { fail } from "@sveltejs/kit";
import type { PageServerLoad } from './$types';



export const load: PageServerLoad = async ({ locals, params, url }) => {
  

  const getProperties = async () => {
    const page = Number(params.page);
    const idProvincia = url.searchParams.get('ubicacion'); // Valor por defecto si no se proporciona
    const idTipo = url.searchParams.get('tipo'); // Valor por defecto si no se proporciona

    const query = locals.sb
      .from('Propiedades')
      .select('*', { count: 'exact' })
      .range(page * 15 - 15, page * 15)
      .order('id', { ascending: true });

    if (idProvincia) {
      query.eq('id_provincia', idProvincia);
    }

    if (idTipo) {
      query.eq('id_tipo', idTipo);
    }

    const { data: properties, error, count: totalItems } = await query;
    console.log(error)
    return { properties , totalItems };
  };
  return getProperties()
}
