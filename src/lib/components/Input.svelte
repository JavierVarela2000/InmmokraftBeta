<script lang="ts">
	//@ts-nocheck
	import { onDestroy } from 'svelte';
	export let value;
	export let label = '';
	export let classContainer = '';
	export let required = false;
	export let active = false;
	export let id = 0;
	export let disabled = false;

	let blurTimeout;

	function handleFocus() {
		clearTimeout(blurTimeout);
		active = true;
	}

	function handleBlur() {
		blurTimeout = setTimeout(() => {
			active = false;
		}, 500);
	}

	onDestroy(() => {
		clearTimeout(blurTimeout);
	});
</script>

<div class="relative {classContainer}">
	<input
		{disabled}
		type="text"
		bind:value
		id={id || label}
		name={label}
		class=" peer block w-full border-b capitalize border-gray-300 py-1 text-gray-600 transition-colors  focus:outline-none focus:placeholder:text-white"
		autocomplete="off"
		placeholder=""
		{required}
		on:focus={handleFocus}
		on:blur={handleBlur}
	/>
	<label
		class:top-2={!value}
		class:text-gray-500={!value}
		class:-top-4={value}
		class:text-blue-dark={value}
		for={id || label}
		class=" select-none z-1 text-sm absolute left-0  cursor-text  transition-all duration-200 peer-focus:-top-4 peer-focus:text-blue-dark peer-focus:font-medium"
	>
		{label}
	</label>
	<div
		class="absolute border-b-2 border-blue-light bottom-0 transition-all peer-focus:w-full duration-200"
		class:w-full={value}
		class:w-0={!value}
	/>
</div>
