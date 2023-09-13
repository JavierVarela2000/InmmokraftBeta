<script>
	//@ts-nocheck
	import { goto } from '$app/navigation';
	import Loader from './Loader.svelte';
	let active = true;
	export let sufix = '';
	let valueTipo, valueUbicacion, valuePrecio;
	const toggle = () => {
		active = !active;
	};

	const getTipos = async () => {
		let res;

		await fetch(`/api/tipos`)
			.then((response) => response.json())
			.then((obj) => (res = obj.body));

		return res;
	};
	const getUbicaciones = async () => {
		let res;

		await fetch(`/api/ubicaciones-disponibles`)
			.then((response) => response.json())
			.then((obj) => (res = obj.body));

		return res;
	};
</script>

<div class="m-auto w-11/12 max-w-xl">
	<div class="flex gap-8 flex-col bg-white py-5 px-3 mt-6  md:flex-row md:justify-start md:px-8">
		{#await getTipos()}
			<!-- promise is pending -->
			<div class="w-32"><Loader r="15" /></div>
		{:then tipos}
			<!-- promise was fulfilled -->
			<div class="h-14 text-gray-700">
				<span class="text-sky-900 text-sm font-semibold pl-1">TIPO</span>
				<div class="w-full border-b border-solid border-gray-400">
					<select
						bind:value={valueTipo}
						name="TIPO"
						id="tipo"
						class="cursor-pointer flex-1 w-full text-sm h-10"
					>
						<option value="">Todos los Tipos</option>
						{#each tipos as tipo}
							<option value={tipo.id}>{tipo.nombre}</option>
						{/each}
					</select>
				</div>
			</div>
		{/await}
		{#await getUbicaciones()}
			<div class="w-32"><Loader r="15" /></div>
		{:then ubicaciones}
			<div class="h-14 text-gray-700">
				<span class="text-sky-900 text-sm font-semibold pl-1">UBICACION</span>
				<div class="w-full border-b border-solid border-gray-400">
					<select
						bind:value={valueUbicacion}
						name="Ubicaciones"
						id="ubicacion"
						class="cursor-pointer flex-1 w-full text-sm h-10"
						><option selected value="">Todas las Ubicaciones</option>

						{#each ubicaciones as ubicacion}
							<option value={ubicacion.id}>{ubicacion.nombre}</option>
						{/each}
					</select>
				</div>
			</div>
		{/await}

		<button
			on:click={goto(
				`/properties/1?tipo=${valueTipo}&ubicacion=${valueUbicacion}&precio=${valuePrecio}`
			)}
			class="flex items-center justify-center gap-3 m-auto h-14 w-40 bg-blue-light rounded transition-all duration-300 cursor-pointer hover:scale-105 hover:-translate-y-1
			md:mt-0"
		>
			<div class="w-5">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
					><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
						d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"
						fill="#ffffff"
					/></svg
				>
			</div>
			<span class="text-white font-semibold text-sm">BUSCAR</span>
		</button>
	</div>
</div>
