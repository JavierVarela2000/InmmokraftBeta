<script lang="ts">
	//@ts-nocheck
	import { invalidateAll } from '$app/navigation';
	import Pagination from '$lib/components/Pagination.svelte';
	export let data;
	let deleteForm = false;
	let id;

	const handleDelete = async () => {
		const formData = new FormData();
		formData.append('id', id);
		let fileNames = data.properties?.find((p) => p.id === id).imagenes;
		fileNames = fileNames.map((f) => f.fileName);
		for (let i = 0; i < fileNames.length; i++) {
			formData.append('fileNames', fileNames[i].fileNames);
		}
		await fetch('?/delete', {
			method: 'POST',
			body: formData
		})
			.then((response) => {
				console.log(response);
				deleteForm = !deleteForm;
				invalidateAll();
			})
			.catch((error) => console.error(error));
	};
</script>

<div class:hidden={!deleteForm} class="fixed w-10/12 h-full top-0 right-0 bg-black/50 flex">
	<div class="text-blue-dark m-auto bg-white px-20 py-10">
		<span>!Estas Por Eliminar una propiedad!</span>
		<div class="mt-5 text-white">
			<button
				on:click={() => (deleteForm = !deleteForm)}
				class="px-8 py-4 bg-red-600 hover:bg-red-700">Cancelar</button
			>
			<button on:click={handleDelete} class="px-8 py-4 bg-blue-light hover:bg-blue-dark"
				>Aceptar</button
			>
		</div>
	</div>
</div>

<div class=" pb-7 bg-white m-10 shadow-md">
	<table class="table-auto w-full mb-10">
		<thead>
			<tr class=" bg-blue-dark text-white text-sm">
				<th class="text-start py-6 pl-5">Propiedad</th>
				<th class="text-start">Fecha de Publicación</th>
				<th class="text-start">Provincia</th>
				<th class="text-start">Parroquia</th>
				<th class="text-start">Canton</th>
				<th class="text-start">Acciones</th>
			</tr>
		</thead>
		<tbody class="text-gray-600 ">
			{#each data.properties as property}
				<tr class=" border-b border-gray-300 hover:bg-gray-100">
					<td class="pl-5">{property.titulo}</td>
					<td>{property.created_at}</td>
					<td>{property.Provincias.nombre}</td>
					<td>{property.Parroquias.nombre}</td>
					<td>{property.Cantones.nombre}</td>
					<td>
						<div class="inline-flex">
							<a
								class="py-5 px-2 transition-all duration-150 hover:scale-110"
								href={`/admin/properties/edit/${property.id}`}
								><img src="/icons/edit.svg" alt="" /></a
							>
							<button
								class="py-5 px-2 transition-all duration-150 hover:scale-110"
								on:click={() => {
									deleteForm = true;
									id = Number(property.id);
								}}><img src="/icons/delete.svg" alt="" /></button
							>
						</div>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
	<Pagination totalItems={data.totalItems} href="/admin/properties/" />
</div>
