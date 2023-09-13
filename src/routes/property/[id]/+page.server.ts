//@ts-nocheck
import { fail } from "@sveltejs/kit";
import type { PageServerLoad } from './$types';


export const load = (async ({ locals, params }) => {


    const { data, error } = await locals.sb
        .from('Propiedades')
        .select(`
        *,
        Cantones(*),
        Provincias(*),
        Parroquias(*)
    `)
        .eq('id', params.id)

    if (error) {
        fail(303, "Something Was Wrong")
    }

    if (data?.length == 0) {
        fail(404, "archivo No encontrado")
    }

    return {
        property: data[0]
    }

}) satisfies PageServerLoad; 