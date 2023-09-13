<script lang="ts">
	//@ts-nocheck
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import { each } from 'svelte/internal';
	let mapElement;
	let map;
	export let latitud;
	export let longitud;
	export let zoom = 10;
	export let referencias;
	onMount(async () => {
		if (browser) {
			const leaflet = await import('leaflet');

			map = leaflet.map(mapElement).setView([latitud, longitud], zoom);

			leaflet
				.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
					attribution:
						'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				})
				.addTo(map);

			const imageWidth = 50; // Ancho de la imagen en píxeles
			const imageHeight = 50; // Alto de la imagen en píxeles
			const customIcon = leaflet.icon({
				iconUrl: '/icons/pinMap.png',
				iconSize: [imageWidth, imageHeight],
				iconAnchor: [imageWidth / 2, imageHeight]
			});
			leaflet.marker([latitud, longitud], { icon: customIcon }).addTo(map);
		}
	});

	onDestroy(async () => {
		if (map) {
			map.remove();
		}
	});
</script>

<div class="w-full h-72 mt-5 z-0 sm:h-96 xl:h-[450px] 2xl:h-[500px]" bind:this={mapElement} />
{#if referencias}
	<span class="text-gray-500 mt-3"> {referencias}</span>
{/if}
