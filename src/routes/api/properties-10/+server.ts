// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import type { RequestHandler } from './$types';

export const GET = (async ({ locals}) => {
    const res = {
        body:locals.properties
    }

    return new Response(JSON.stringify(res));
}) satisfies RequestHandler;