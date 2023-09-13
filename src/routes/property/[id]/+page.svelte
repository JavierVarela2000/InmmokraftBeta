<script lang="ts">
	//@ts-nocheck
	import SlideProperty from '$lib/components/SlideProperty.svelte';
	import MapProperty from '$lib/components/MapProperty.svelte';
	import SimilarsSlider from '$lib/components/SimilarsSlider.svelte';
	import { page } from '$app/stores';
	export let data;
</script>

<main class="px-[5%] py-24 xl:mx-auto xl:w-11/12">
	<section class="">
		{#key data.property.imagenes}
			<SlideProperty images={data.property.imagenes} />
		{/key}
	</section>

	<section class="  mt-5 flex flex-col">
		<h3 class="font-semibold text-blue-dark capitalize text-2xl">{data.property.titulo}</h3>
		<div class="flex flex-col gap-5 mt-1">
			<h6 class="capitalize text-gray-500 text-sm">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit.
			</h6>
			<div class="text-white flex items-start gap-2">
				{#if data.property.en_venta}
					<div
						class="bg-blue-light  px-3 py-1 rounded text-[10px] font-semibold flex gap-2  hover:scale-110"
					>
						EN VENTA
					</div>
				{/if}
				{#if data.property.en_renta}
					<div
						class="bg-blue-dark  px-3 py-1 rounded text-[10px] font-semibold flex gap-2  hover:scale-110"
					>
						EN RENTA
					</div>
				{/if}

				<!-- {#each data.property.etiquetas as etiqueta}
					<div class="bg-blue-light  px-3 py-1 rounded text-[10px] font-semibold flex gap-2">
						<span>{etiqueta.value}</span><span class=" uppercase">{etiqueta.name}</span>
					</div>
				{/each} -->
			</div>
		</div>
		<div class="text-gray-500 flex gap-7 mt-5 flex-wrap">
			<div class="flex gap-2 text-sm ">
				<img src="/icons/bed-grey.svg" alt="" /> <span>{data.property.cuartos} Cuartos</span>
			</div>
			<div class="flex gap-2 text-sm">
				<img src="/icons/bath-grey.svg" alt="" /> <span>{data.property.banios} Baños</span>
			</div>
			<div class="flex gap-2 text-sm">
				<img src="/icons/garage-grey.svg" alt="" /> <span>{data.property.garage} Garage</span>
			</div>
			<div class="flex gap-2 text-sm">
				<img src="/icons/area-grey.svg" alt="" /> <span>{data.property.area} m<sup>2</sup></span>
			</div>
		</div>

		{#if data.property.etiquetas.length > 0}
			<div class="flex gap-7 mt-5 flex-wrap text-white">
				{#each data.property.etiquetas as etiqueta}
					<span
						class="bg-green-700  px-3 py-1 rounded-full text-[10px] font-semibold flex gap-2 uppercase hover:scale-110"
					>
						{etiqueta.value}
						{etiqueta.name}
					</span>
				{/each}
			</div>
		{/if}

		<div class="flex flex-col gap-1 mt-5 text-blue-dark font-semibold">
			<span class="">
				{#if data.property.precio_venta}
					{data.property.precio_venta}
				{/if}
			</span>
			<span class="">
				{#if data.property.precio_renta}
					{data.property.precio_renta}/mes
				{/if}
			</span>
		</div>

		<article>
			<h5 class="text-lg font-semibold text-blue-dark mt-5">Descripción</h5>
			<p class="text-gray-500 mt-3">{data.property.descripcion}</p>
		</article>
	</section>
	<hr class=" my-5" />
	<section class=" flex flex-col items-start">
		<span class="text-lg font-semibold text-blue-dark mb-3">Ubicación</span>

		<div class="flex gap-3 text-sm">
			<div class="flex flex-col gap-1">
				<span class="font-semibold text-blue-dark ">Provincia:</span>
				<span class="font-semibold text-blue-dark">Canton:</span>
				<span class="font-semibold text-blue-dark">Parroquia:</span>
			</div>
			<div class="flex flex-col gap-1 text-gray-500">
				<span>{data.property.Provincias.nombre}</span>
				<span>{data.property.Cantones.nombre}</span>
				<span>{data.property.Parroquias.nombre}</span>
			</div>
		</div>

		{#key $page.params.id}
			<MapProperty
				referencias={data.property.referencias}
				latitud={data.property.latitud}
				longitud={data.property.longitud}
				zoom={14}
			/>
		{/key}
	</section>
</main>
<section class=" bg-gray-100 py-16">
	<span class=" font-semibold text-3xl block text-center py-3">Más Propiedades</span>
	<span class=" font'semibold block text-center text-gray-600"
		>Busca Más Propiedades Similares En Nuestro Catálogo</span
	>
	<SimilarsSlider />
</section>
