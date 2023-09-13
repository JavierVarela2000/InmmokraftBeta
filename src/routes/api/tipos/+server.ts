// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import type { RequestHandler } from './$types';

export const GET = (async ({ url ,locals}) => {
    const idString =url.searchParams.get('id');
    let data,error;

    if (idString) {
        const id = Number(idString);
        // Realizar una consulta con el id específico
        ({ data, error } = await locals.sb.from('Tipos').select('*').eq('id', id));
    } else {
        // Realizar una consulta para seleccionar todos los datos si no se proporciona id
        ({ data, error } = await locals.sb.from('Tipos').select('*'));
    }

    const res = {
        body: data
    }
    return new Response(JSON.stringify(res));
}) satisfies RequestHandler;
