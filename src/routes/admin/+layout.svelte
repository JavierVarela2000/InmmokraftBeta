<script lang="ts">
	import { page } from '$app/stores';
	import { invalidateAll } from '$app/navigation';
	import { supabaseClient } from '$lib/supabase';
	import { onMount } from 'svelte';
	import { enhance, type SubmitFunction } from '$app/forms';
	const submitLogout: SubmitFunction = async ({ cancel }) => {
		const { error } = await supabaseClient.auth.signOut();
		if (error) {
			console.log(error);
		}
		cancel();
	};
	onMount(() => {
		const {
			data: { subscription }
		} = supabaseClient.auth.onAuthStateChange(() => {
			console.log('Auth state change detected');
			invalidateAll();
		});

		return () => {
			subscription.unsubscribe();
		};
	});
</script>

<div class="flex min-h-screen pt-16">
	<div class="w-2/12 relative z-10">
		<aside class="h-full bg-white shadow w-2/12 fixed px-4 text-sm ">
			<nav class="flex flex-col pt-10 text-center gap-3  h-3/4">
				<a
					class:bg-blue-light={String($page.url.pathname).includes('/admin/properties/')}
					class:text-white={String($page.url.pathname).includes('/admin/properties/')}
					class="text-blue-dark py-2 rounded-sm hover:bg-blue-dark hover:text-white"
					href="/admin/properties/1">PROPIEDADES</a
				>
				<a
					class:bg-blue-light={String($page.url.pathname).includes('/admin/insert')}
					class:text-white={String($page.url.pathname).includes('/admin/insert')}
					class="text-blue-dark py-2 rounded-sm hover:bg-blue-dark hover:text-white"
					href="/admin/insert">INSERTAR PROPIEDAD</a
				>
			</nav>
			<form action="/logout" method="POST" use:enhance={submitLogout}>
				<button
					type="submit"
					class="text-white bg-red-600 py-2 rounded-sm hover:bg-red-700 hover:text-white w-full"
					>Cerrar Sesion</button
				>
			</form>
		</aside>
	</div>
	<main class=" bg-gray-100 w-10/12"><slot /></main>
</div>
