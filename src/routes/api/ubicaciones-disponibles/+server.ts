/* eslint-disable prefer-const */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import type { RequestHandler } from './$types';

export const GET = (async ({ url ,locals}) => {
    let { data, error } = await locals.sb.from('Propiedades')
    .select(`
      id_provincia,
      Provincias (
        id,
        nombre
      )
    `);

    let provinciasIdsUnicos = Array.from(new Set(data.map(item => item.Provincias.id)));

    let provinciasUnicas = provinciasIdsUnicos.map(id => {
        return data.find(item => item.Provincias.id === id).Provincias;
      });
    
    console.log(provinciasUnicas);


    const res = {
        body: provinciasUnicas,
    }
    return new Response(JSON.stringify(res));
}) satisfies RequestHandler;