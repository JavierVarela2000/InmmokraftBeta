<script lang="ts">
	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';
	export let session;
	const routes = [
		{ name: 'Inicio', href: '/' },
		{ name: 'Nosotros', href: '/#nosotros' },
		{ name: 'Propiedades', href: '/properties/1' },
		{ name: 'Contactos', href: '/#contactos' },
		{ name: 'Requerimientos', href: '/requerimientos' }
	];
	let active = false;
	let activeNav = false;

	let scrollY = 0;
	let innerWidth: number;

	$: if (
		scrollY > 100 ||
		String($page.url.pathname).includes('/property/') ||
		String($page.url.pathname).includes('/admin/') ||
		String($page.url.pathname).includes('/requerimientos') ||
		String($page.url.pathname).includes('/login')
	) {
		activeNav = true;
	} else {
		activeNav = false;
	}

	const toggle = () => {
		active = !active;
	};
</script>

<svelte:window bind:innerWidth bind:scrollY />

<nav
	id="nav"
	class=" 2xl:px-[11%]  fixed w-full flex-wrap h-16 z-50 px-5 transition-colors duration-300 md:px-8"
	class:bg-blue-dark={activeNav}
	class:shadow-md={activeNav}
>
	<div class="flex items-center">
		<div class="flex w-full justify-between p-2 items-center">
			<div class="flex items-center gap-x-1.5">
				<div class="w-10"><img src="/Logo-blanco-transparente.png" alt="" /></div>
				<h2 class="mt-4 font-sans font-semibold text-white">Inmmokraft</h2>
			</div>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div class="flex gap-6">
				<div class=" md:hidden"><slot /></div>

				<div class="cursor-pointer w-8 md:hidden" on:click={toggle}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
						><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
							d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
							fill="#ffffff"
						/></svg
					>
				</div>
			</div>
		</div>

		{#if active && innerWidth < 767}
			<div
				transition:fly={{ x: 200, duration: 500 }}
				class="absolute top-0 right-0 bg-white w-56 h-screen font-sans text-sm"
			>
				<ul class="pt-2">
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<li class="flex justify-end w-full p-4 md:hidden">
						<img
							on:click={toggle}
							class="block w-8 h-8 cursor-pointer"
							src="/close.svg"
							alt="close btn"
						/>
					</li>

					{#each routes as { name, href }}
						<li>
							<a
								class="hover:transition-all duration-100 h-12 flex items-center border-solid border-b border-neutral-200 hover:border-sky-700 hover:-translate-y-[1px] pl-5"
								{href}
								on:click={toggle}>{name}</a
							>
						</li>
					{/each}
				</ul>
			</div>
		{:else if innerWidth > 767}
			<div class=" top-0 right-0 font-sans text-sm relative">
				<ul class="flex text-white pt-2">
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					{#each routes as { name, href }}
						<li>
							<a
								class="hover:transition-all duration-100 uppercase h-12 flex items-center hover:-translate-y-[1px] pl-5"
								{href}
								on:click={toggle}>{name}</a
							>
						</li>
					{/each}
				</ul>
			</div>
		{/if}
		<div class="hidden md:block">
			{#if session}
				<div class=" ml-6 h-full cursor-pointer ">
					<a href="/admin/properties/1" class="inline-flex justify-center items-end gap-2"
						><svg class="w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
							><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
								fill="white"
								d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
							/></svg
						><span class="text-white">Admin</span></a
					>
				</div>
			{/if}
		</div>
	</div>
</nav>
