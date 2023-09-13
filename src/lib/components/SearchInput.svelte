<script lang="ts">
	//@ts-nocheck
	import Input from './Input.svelte';
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';
	import { searchStore, searchHandler } from '$lib/stores/search.ts';
	import { onDestroy, afterUpdate, onMount } from 'svelte';

	export let items: any[] = [];
	export let label: string = '';
	export let value;
	export let id: string = '';

	let active;
	onMount(() => {
		if (value) {
			$search.search = value;
		}
	});
	const searchItems = items.map((item) => ({
		...item,
		searchTerm: `${item.nombre}`
	}));
	const search = searchStore(searchItems);

	const unsubscribe = search.subscribe((model) => searchHandler(model));

	onDestroy(() => {
		unsubscribe();
	});
	const dispatch = createEventDispatcher();

	const handleItemClick = (item) => {
		$search.search = item.nombre;
		active = false;
		dispatch('selected', item);
	};

	afterUpdate(() => {
		if (items) {
			items = items;
		}
	});
</script>

<div class="w-full">
	<Input bind:value={$search.search} bind:active id={id || label} {label} />
	<div class="relative">
		{#if active}
			<div
				in:fade={{ duration: 200 }}
				class=" overflow-y-scroll w-full max-h-56 flex flex-col absolute z-10"
			>
				{#each $search.filtered as item}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div
						class=" bg-white py-2 pl-1 cursor-pointer hover:bg-gray-200"
						on:click={() => {
							handleItemClick(item);
						}}
					>
						{item.nombre}
					</div>
				{/each}
			</div>
		{/if}
	</div>
</div>
