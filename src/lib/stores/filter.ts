import { writable } from 'svelte/store';

// Crear una tienda escribible para los cantones filtrados
export const filteredCantones = writable([]);