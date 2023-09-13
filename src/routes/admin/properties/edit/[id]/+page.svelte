<script lang="ts">
	//@ts-nocheck
	import { fly } from 'svelte/transition';
	import Informacion from '$lib/forms/Informacion.svelte';
	import Caracteristicas from '$lib/forms/Caracteristicas.svelte';
	import Imagenes from '$lib/forms/Imagenes.svelte';
	import MapForm from '$lib/forms/MapForm.svelte';
	import { invalidateAll } from '$app/navigation';
	import Loader from '$lib/components/Loader.svelte';
	//Variables
	export let data;
	let property = data.propiedad;

	let showLoader = false;

	let images: Array<unknown> = property.imagenes.map((img) => img.src);
	let imagesToAdd = [];
	let imagesToDelete = [];

	const handleDelete = (e) => {
		imagesToDelete = [...imagesToDelete, e.detail];
		console.log(imagesToDelete);
	};

	const handleAdd = (e) => {
		imagesToAdd = [...imagesToAdd, ...e.detail.files];
	};

	//Funciones

	const handleSubmit = async () => {
		showLoader = true;
		const formData = new FormData();

		for (let i = 0; i < imagesToAdd.length; i++) {
			formData.append('imagesToAdd', imagesToAdd[i]);
		}

		for (let i = 0; i < imagesToDelete.length; i++) {
			formData.append('imagesToDelete', imagesToDelete[i]);
		}

		formData.append('property', JSON.stringify(property));

		await fetch('?/edit', {
			method: 'POST',
			body: formData
		})
			.then((response) => {
				response.json();
				// location.reload();
				invalidateAll();
				showLoader = false;
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
		Editar Propiedad
	</div>
	<Informacion
		types={data.tipos}
		bind:tittle={property.titulo}
		bind:inRent={property.en_renta}
		bind:rentPrice={property.precio_renta}
		bind:inSale={property.en_venta}
		bind:salePrice={property.precio_venta}
		bind:descripcion={property.descripcion}
		bind:typeId={property.id_tipo}
	/>

	<Caracteristicas
		bind:rooms={property.cuartos}
		bind:bathrooms={property.banios}
		bind:garage={property.garage}
		bind:area={property.area}
		bind:fields={property.etiquetas}
	/>

	<Imagenes bind:images on:delete={handleDelete} on:add={handleAdd} />

	<MapForm
		provincias={data.provincias}
		bind:lat={property.latitud}
		bind:lng={property.longitud}
		bind:idCanton={property.id_canton}
		bind:idParroquia={property.id_parroquia}
		bind:idProvincia={property.id_provincia}
		bind:referencias={property.referencias}
		zoom={14}
	/>

	<input
		type="submit"
		value="Enviar"
		class="p-4 px-10 bg-blue-light block text-white ml-auto mr-16 mt-10 cursor-pointer transition-colors hover:bg-blue-dark hover:-translate-y-[1px]"
	/>
</form>
