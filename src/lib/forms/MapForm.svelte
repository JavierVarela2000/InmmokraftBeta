<script lang="ts">
	//@ts-nocheck
	import Input from '../components/Input.svelte';
	import SearchInput from '../components/SearchInput.svelte';
	import { onMount, onDestroy, afterUpdate } from 'svelte';
	import { browser } from '$app/environment';
	import obtenerInformacionUbicacion from '$lib/getStreets';

	export let provincias = [];
	export let lat;
	export let lng;
	export let idProvincia;
	export let idCanton;
	export let idParroquia;
	export let zoom = 7;
	export let referencias;
	let parroquias;
	let mapContainer;
	let map;
	let cantones;
	let obj = { provincia: { nombre: '' }, canton: { nombre: '' }, parroquia: { nombre: '' } };

	if (idProvincia) {
		obj.provincia = provincias.find((objeto) => objeto.id === idProvincia);
	}

	const getCantones = async (id) => {
		let res;
		await fetch(`/api/cantones/?idProvincia=${id}`)
			.then((response) => response.json())
			.then((obj) => (res = obj.body));
		return res;
	};

	const getParroquias = async (id) => {
		let res;
		await fetch(`/api/parroquias/?idCanton=${id}`)
			.then((response) => response.json())
			.then((obj) => (res = obj.body));
		return res;
	};

	async function handleProvinceItemSelected(event) {
		cantones = null;
		parroquias = null;
		let cords = [event.detail.latitud, event.detail.longitud];
		map.flyTo(cords, 9);
		idProvincia = event.detail.id;
		cantones = await getCantones(event.detail.id);
	}

	async function handleCantonItemSelected(event) {
		parroquias = null;
		let cords = [event.detail.latitud, event.detail.longitud];
		map.flyTo(cords, 10);
		idCanton = event.detail.id;
		parroquias = await getParroquias(event.detail.id);
	}

	function handleParroquiaItemSelected(event) {
		idParroquia = event.detail.id;
		let cords = [event.detail.latitud, event.detail.longitud];
		map.flyTo(cords, 13);
	}

	onMount(async () => {
		if (browser) {
			const L = await import('leaflet');
			map = L.map(mapContainer).setView([lat, lng], zoom);

			L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				attribution:
					'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			}).addTo(map);

			map.on('moveend', () => {
				const center = map.getCenter();
				lat = center.lat;
				lng = center.lng;
			});

			if (idProvincia) {
				cantones = await getCantones(idProvincia);
				obj.canton = cantones.find((objeto) => objeto.id === idCanton);
			}
			if (idCanton) {
				parroquias = await getParroquias(idCanton);
				obj.parroquia = parroquias.find((parroquia) => parroquia.id === idParroquia);
			}
		}
		referencias = await obtenerInformacionUbicacion(lat, lng);
	});

	afterUpdate(async () => {
		referencias = await obtenerInformacionUbicacion(lat, lng);
	});

	onDestroy(async () => {
		if (map) {
			console.log('Unloading Leaflet map.');
			map.remove();
		}
	});
</script>

<div class="flex gap-7 mt-10 mx-auto p-10 shadow w-11/12 h-[600px] bg-white">
	<div class=" w-full h-full relative">
		<img
			src="/icons/pinMap.png"
			class="absolute w-14 h-14 z-20 left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4"
			alt=""
		/>
		<div class="w-full h-full z-0" bind:this={mapContainer} />
	</div>
	<div class="flex flex-col gap-12 w-6/12 pt-5">
		<Input disabled={true} label="Latitud" bind:value={lat} />
		<Input disabled={true} label="Longitud" bind:value={lng} />
		<Input disabled={true} label="Calles" bind:value={referencias} />

		<SearchInput
			bind:value={obj.provincia.nombre}
			label="Provincia"
			items={provincias}
			on:selected={handleProvinceItemSelected}
		/>
		{#if cantones}
			<SearchInput
				bind:value={obj.canton.nombre}
				label="Canton"
				items={cantones}
				on:selected={handleCantonItemSelected}
			/>
		{/if}
		{#if parroquias}
			<SearchInput
				bind:value={obj.parroquia.nombre}
				label="Parroquia"
				items={parroquias}
				on:selected={handleParroquiaItemSelected}
			/>
		{/if}
	</div>
</div>
