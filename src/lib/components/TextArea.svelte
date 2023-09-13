<script>
	// @ts-nocheck

	export let value;
	export let label;
	export let classContainer;
</script>

<div class="relative {classContainer}">
	<textarea
		bind:value
		class=" peer block w-full border-b border-gray-300 py-1 text-gray-600 transition-colors  focus:outline-none focus:placeholder:text-white"
		name=""
		id={label}
		rows="5"
	/>

	<label
		class:top-2={!value}
		class:text-gray-500={!value}
		class:-top-4={value}
		class:text-blue-dark={value}
		class:font-semibold={value}
		for={label}
		class=" select-none z-1 text-sm absolute left-0  cursor-text  transition-all peer-focus:-top-4 peer-focus:text-blue-dark peer-focus:font-semibold"
		>{label}</label
	>
	<div
		class="absolute border-b-2 border-blue-light bottom-0 transition-all peer-focus:w-full duration-500"
		class:w-full={value}
		class:w-0={!value}
	/>
</div>
