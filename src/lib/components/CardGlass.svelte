<script lang="ts">
	export let imagenes: any[] = [];
	export let price = '';
	export let tittle = '';
	export let id = '';
	export let sale: Boolean;
</script>

<div class="relative w-screen h-full text-white flex flex-col justify-center gap-6">
	<div class="absolute w-full h-full bg-blue-dark/50 z-40" />
	<img
		class="block absolute w-full h-full object-cover z-30"
		src={imagenes[0]?.src}
		alt={imagenes[0]?.fileName}
	/>

	<h4 class=" text-center text-2xl z-50 leading-relaxed w-72 mx-auto">{tittle}</h4>
	<span class=" block text-center z-50"
		>{price}
		{#if !sale}
			<span> POR MES</span>
		{/if}</span
	>
	<a
		href="/property/{id}"
		class="bg-white text-blue-dark font-semibold px-8 z-50 py-3 rounded-sm mx-auto inline font-sans"
	>
		Ver Propiedad
	</a>
</div>

<style>
</style>
