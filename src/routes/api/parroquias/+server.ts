// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import type { RequestHandler } from './$types';

export const GET = (async ({ url, locals }) => {
	const id = Number(url.searchParams.get('idCanton'));

	const { data, error } = await locals.sb.from('Parroquias').select('*').eq('id_canton', id);

	const res = {
		body: data
	};
	return new Response(JSON.stringify(res));
}) satisfies RequestHandler;
