<script lant="ts">
	//@ts-nocheck
	import Input from '../components/Input.svelte';
	import { fly } from 'svelte/transition';

	export let rooms = '0';
	export let bathrooms = '0';
	export let garage = '0';
	export let area = '0';
	export let fields = [];
	const addField = () => {
		fields = [...fields, { name: '', value: '' }];
	};

	const removeField = (index) => {
		fields = fields.filter((_, i) => i !== index);
	};
	// Funciones addField y removeField aquí
</script>

<div class="bg-white mt-10 mx-auto p-10 shadow w-11/12 items-start flex flex-col gap-6">
	<span class=" text-lg font-semibold text-blue-dark">Características</span>
	<div class="grid grid-cols-4 w-full">
		<div class="flex gap-3 justify-center items-end px-5 py-8 ">
			<img src="/icons/bed.svg" alt="" /><Input bind:value={rooms} label="Cuartos" id="cuartos" />
		</div>
		<div class="flex gap-3 justify-center items-end px-5 py-8 ">
			<img src="/icons/bath.svg" alt="" /><Input bind:value={bathrooms} label="Baños" id="baños" />
		</div>
		<div class="flex gap-3 justify-center items-end px-5 py-8 ">
			<img src="/icons/car.svg" alt="" /><Input bind:value={garage} label="Garage" id="garage" />
		</div>
		<div class="flex gap-3 justify-center items-end px-5 py-8 ">
			<img src="/icons/ruler.svg" alt="" /><Input bind:value={area} label="Area en m²" id="area" />
		</div>
	</div>
	<div class="grid grid-cols-3 w-full gap-12 2xl:grid-cols-4">
		{#each fields as field, i}
			<div
				class="flex group gap-4 duration-200 border-transparent border p-7 relative hover:border-gray-300"
				in:fly={{ x: -50, duration: 500 }}
			>
				<Input
					bind:value={field.name}
					classContainer="w-full"
					id="caracteristica-{i}"
					label="Caracteristica"
				/>

				<Input bind:value={field.value} classContainer=" w-16" label="Valor" id="valor-{i}" />

				<button
					on:click|preventDefault={() => removeField(i)}
					class="absolute -top-3 hidden -right-3 p-2 rounded-full group-hover:block bg-red-300 hover:scale-110 hover:bg-red-600"
				>
					<svg class="w-2 h-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
						><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
							fill="#fff"
							d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
						/></svg
					>
				</button>
			</div>
		{/each}
		<button
			class="border  border-blue-light h-20 text-sm px-10 py-5 text-blue-light shadow hover:shadow-blue-light hover:shadow-sm"
			on:click|preventDefault={addField}>AGREGAR CARACTERISTICA</button
		>
	</div>
</div>
