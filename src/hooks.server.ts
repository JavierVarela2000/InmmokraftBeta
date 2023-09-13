// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import "$lib/supabase"
import { getSupabase } from "@supabase/auth-helpers-sveltekit"
import type { Handle } from "@sveltejs/kit"

export const handle: Handle = async ({ event, resolve }) => {
	const { session, supabaseClient } = await getSupabase(event)
	const { data: properties} = await supabaseClient.from('Propiedades')
    .select('*')
    .range(0, 9)
	event.locals.sb = supabaseClient
	event.locals.session = session
	event.locals.properties = properties;

	return resolve(event)
}
