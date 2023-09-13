import { AuthApiError } from '@supabase/supabase-js';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load = (async ({ locals }) => {
	if (locals.session) {
		throw redirect(303, '/admin/pages/1');
	}
}) satisfies PageServerLoad;

export const actions = {
	login: async ({ request, locals }) => {
		const body = Object.fromEntries(await request.formData());

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { data, error: err } = await locals.sb.auth.signInWithPassword({
			email: body.email as string,
			password: body.password as string
		});

		if (err) {
			if (err instanceof AuthApiError && err.status === 400) {
				return fail(400, {
					error: 'Invalid credentials'
				});
			}
			return fail(500, {
				message: 'Server error. Try again later.'
			});
		}

		throw redirect(303, '/admin/properties/1');
	}
} satisfies Actions;
