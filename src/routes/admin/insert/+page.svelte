<script lang="ts">
	//@ts-nocheck
	import Informacion from '$lib/forms/Informacion.svelte';
	import Caracteristicas from '$lib/forms/Caracteristicas.svelte';
	import Imagenes from '$lib/forms/Imagenes.svelte';
	import MapForm from '$lib/forms/MapForm.svelte';
	import Loader from '$lib/components/Loader.svelte';
	import { goto } from '$app/navigation';

	//Variables
	export let data;
	let images = [];
	let showLoader = false;
	let property = {
		latitud: -1.831239,
		longitud: -78.183406,
		typeId: data.tipos[0]?.id,
		tittle: '',
		inRent: null,
		rentPrice: null,
		inSale: null,
		idProvincia: null,
		idCanton: null,
		idParroquia: null,
		salePrice: null,
		description: '',
		rooms: '',
		bathrooms: '',
		garage: '',
		area: '',
		badges: [],
		zoom: null
	};

	const handleSubmit = async () => {
		showLoader = true;
		const formData = new FormData();
		for (let i = 0; i < images.length; i++) {
			formData.append('images', images[i]);
		}
		formData.append('property', JSON.stringify(property));
		await fetch('?/insert', {
			method: 'POST',
			body: formData
		})
			.then((response) => {
				showLoader = false;
				response.json();
				goto('/admin/properties/1');
			})
			.catch((error) => console.error(error));
	};
</script>

{#if showLoader}
	<div class="w-full h-full fixed left-0 top-0 bg-black/50 z-50 flex items-center justify-center">
		<Loader />
	</div>
{/if}

<form on:submit|preventDefault={handleSubmit} class="bg-gray-100 pt-6 pb-10">
	<div class=" font-semibold text-blue-dark text-2xl pt-0 w-11/12 mx-auto mb-8">
		Nueva Propiedad
	</div>
	<Informacion
		types={data.tipos}
		bind:tittle={property.tittle}
		bind:inRent={property.inRent}
		bind:rentPrice={property.rentPrice}
		bind:inSale={property.inSale}
		bind:salePrice={property.salePrice}
		bind:descripcion={property.description}
		bind:typeId={property.typeId}
	/>

	<Caracteristicas
		bind:rooms={property.rooms}
		bind:bathrooms={property.bathrooms}
		bind:garage={property.garage}
		bind:area={property.area}
		bind:fields={property.badges}
	/>
	<Imagenes bind:images />

	<MapForm
		provincias={data.provincias}
		bind:lat={property.latitud}
		bind:lng={property.longitud}
		bind:idCanton={property.idCanton}
		bind:idParroquia={property.idParroquia}
		bind:idProvincia={property.idProvincia}
		bind:referencias={property.references}
	/>

	<input
		type="submit"
		value="Enviar"
		class="p-4 px-10 bg-blue-light block text-white ml-auto mr-16 mt-10 cursor-pointer transition-colors hover:bg-blue-dark hover:-translate-y-[1px]"
	/>
</form>
