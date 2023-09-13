import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from './$types';


export const load = (async () => {

    throw redirect(302,'/properties/1');
    // const { data, error } = await locals.sb.from('Propiedades')
    // .select('*')
    // .range(0, 15)
    // if (error) {
    //     return fail(500, {
    //         message: "Server error. Try again later.",
    //         error: error,
    //     })
    // }

    
	// return {properties: data};
}) satisfies PageServerLoad;