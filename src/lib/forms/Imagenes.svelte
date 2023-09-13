<script lang="ts">
	//@ts-nocheck
	import { createEventDispatcher } from 'svelte';
	export let images = [];
	const dispatch = createEventDispatcher();
	const addImages = (e) => {
		images = [...images, ...e.target.files];
		dispatch('add', e.target);
	};

	const removeImage = (indexToRemove) => {
		if (typeof images[indexToRemove] === 'string') {
			dispatch('delete', images[indexToRemove]);
		}
		images = images.filter((_, index) => index !== indexToRemove);
	};
</script>

<div class="bg-white mt-10 mx-auto p-10 shadow w-11/12 ">
	<span class=" text-lg font-semibold text-blue-dark block mb-10">Imágenes</span>
	<div class="w-full flex flex-wrap gap-4">
		{#each images as image, index}
			<div
				class="relative group shadow shadow-blue-dark/50 hover:shadow-blue-dark/60 hover:shadow-md"
			>
				<img
					class="block w-44 h-44 object-cover"
					src={typeof image === 'string' ? image : URL.createObjectURL(image)}
					alt="Imagen"
				/>
				<div class="absolute w-full h-full bg-blue-dark/10 top-0 left-0" />

				<button
					on:click|preventDefault={() => removeImage(index)}
					class="absolute invisible group-hover:visible top-0 left-0 w-full h-full p-3 hover:bg-blue-dark/40 flex flex-col gap-3 items-center justify-center"
				>
					<svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
						><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
							class="fill-slate-300"
							d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
						/></svg
					><span class=" text-slate-200">Eliminar Imagen</span>
				</button>
			</div>
		{/each}
		<label
			class="flex justify-center w-44 h-44 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer text-gray-600 hover:text-gray-500 hover:border-slate-600 hover:bg-blue-dark/20 focus:outline-none"
		>
			<span class="flex flex-col justify-center gap-3 items-center space-x-2">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-14 h-14"
					><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
						class=" fill-slate-500"
						d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
					/></svg
				>
				<span class="font-medium"> Subir Imágenes </span>
			</span>
			<input type="file" multiple on:change={addImages} class="hidden" />
		</label>
	</div>
</div>
