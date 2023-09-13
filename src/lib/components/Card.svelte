<script lang="ts">
	export let id = '';
	export let tittle = '';
	export let referencias = '';
	export let beds = '';
	export let bath = '';
	export let garage = '';
	export let area = '';
	export let rentPrice = '';
	export let salePrice = '';
	export let inRent = false;
	export let inSale = false;
	export let imagenes: any = [];
</script>

<a
	data-sveltekit-preload-data="hover"
	href="/property/{id}"
	class="relative w-80 overflow-hidden shadow-sm bg-white border border-solid border-gray-200 hover:shadow-md"
>
	<div class=" h-48">
		<div class="relative h-full">
			<div class="absolute top-0 w-full h-full bg-blue-dark/20 z-10" />
			<img
				src={imagenes[0]?.src}
				alt={imagenes[0]?.src}
				class=" object-cover w-full h-full block"
			/>
		</div>
	</div>
	{#if inRent}
		<div
			class="absolute text-xs block top-3 right-5  bg-blue-dark font-medium text-white py-1.5 px-3 z-30"
		>
			En Renta
		</div>
	{/if}

	{#if inSale}
		<div
			class="absolute text-xs block top-3 left-5  bg-blue-light font-medium  text-white py-1.5 px-3 z-30"
		>
			En Venta
		</div>
	{/if}

	<div class="outline outline-1 outline-gray-300 p-3 h-full">
		<h4 class=" font-semibold text-blue-dark py-1 capitalize">{tittle}</h4>
		<h5 class="text-gray-400 text-sm pb-4 font-normal">{referencias}</h5>
		<div class="flex justify-between mb-3">
			<div class="flex flex-col items-center gap-1">
				<img class=" w-5 h-5" src="/icons/bed.svg" alt="" />
				<span class=" text-sm text-gray-400 text-center">{beds} Cuartos</span>
			</div>
			<div class="flex flex-col items-center gap-1">
				<img class=" w-5 h-5" src="/icons/bath.svg" alt="" />
				<span class=" text-sm text-gray-400 text-center">{bath} baños</span>
			</div>
			<div class="flex flex-col items-center gap-1">
				<img class=" w-5 h-5" src="/icons/car.svg" alt="" />
				<span class=" text-sm text-gray-400 text-center">{garage} Garage</span>
			</div>
			<div class="flex flex-col items-center gap-1">
				<img class=" w-5 h-5" src="/icons/ruler.svg" alt="" />
				<span class=" text-sm text-gray-400 text-center">{area} m<sup>2</sup></span>
			</div>
		</div>
		<hr class="bg-gray-300" />
		<div class="flex justify-between text-blue-dark font-semibold gap-3 py-3">
			{#if inSale}
				<span class="">{salePrice}</span>
			{/if}
			{#if inRent}
				<span class="">{rentPrice}/mes</span>
			{/if}
		</div>
	</div>
</a>
