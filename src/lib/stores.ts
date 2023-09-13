import { writable } from 'svelte/store';

// Crear una tienda escribible para los cantones filtrados
export const filteredCantones = writable([]);
export const images = writable([]);
export const coordinates = writable({
	lat: -1.831239,
	lng: -78.183406,
	zoom: 7
});
