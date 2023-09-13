<script>
	//@ts-nocheck
	import Card from '$lib/components/Card.svelte';
	import { page } from '$app/stores';

	export let data;
	const itemsPerPage = 16;
	$: pages = Array(Math.ceil(data.totalItems / itemsPerPage));
</script>

<div class=" bg-gray-100 py-28 flex flex-col items-center min-h-screen justify-start gap-28">
	<div class="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-4">
		{#each data.properties as propiedad}
			<Card
				id={propiedad.id}
				tittle={propiedad.titulo}
				area={propiedad.area}
				beds={propiedad.cuartos}
				bath={propiedad.banios}
				garage={propiedad.garage}
				imagenes={propiedad.imagenes}
				inRent={propiedad.en_renta}
				inSale={propiedad.en_venta}
				rentPrice={propiedad.precio_renta}
				salePrice={propiedad.precio_venta}
				referencias={propiedad.referencias}
			/>
		{/each}
	</div>

	<div class="flex gap-3">
		{#each pages as _, i}
			<a
				href="/properties/{i + 1}"
				class=" w-10 h-10 shadow transition-colors rounded-full inline-flex justify-center items-center hover:bg-blue-light hover:text-white {Number(
					$page.params.page
				) ===
				i + 1
					? 'bg-blue-dark text-white'
					: 'bg-white'}"
			>
				{i + 1}
			</a>
		{/each}
	</div>
</div>
