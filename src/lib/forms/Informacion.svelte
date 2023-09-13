<script lang="ts">
	//@ts-nocheck
	import Input from '../components/Input.svelte';
	import TextArea from '../components/TextArea.svelte';
	import CheckBox from '../components/CheckBox.svelte';
	export let types = [];
	export let tittle;
	export let inRent;
	export let rentPrice;
	export let inSale;
	export let salePrice;
	export let descripcion;
	export let typeId;
</script>

<div class="grid grid-cols-2 gap-10 w-11/12 mx-auto pb-9 bg-white p-10 shadow">
	<span class=" col-span-2 text-lg font-semibold text-blue-dark">Información</span>
	<Input bind:value={tittle} label="Titulo" />
	<div class="w-full  border-solid border-b-2 border-blue-light">
		<select
			bind:value={typeId}
			name="Tipo"
			class="outline-none  flex-1 w-full text-sm h-7 cursor-pointer text-blue-dark font-semibold"
		>
			{#each types as item}
				<option value={item.id}>{item.nombre}</option>
			{/each}
		</select>
	</div>

	<!-- svelte-ignore missing-declaration -->
	<TextArea classContainer=" col-span-2" label="Descripción" bind:value={descripcion} />

	<div class="">
		<div><CheckBox bind:checked={inSale} label="En Venta" /></div>
		<div class="mt-6">
			<Input bind:value={salePrice} disabled={!inSale} label="Precio de Venta" />
		</div>
	</div>
	<div>
		<CheckBox bind:checked={inRent} label="En Renta" />
		<div class="mt-6">
			<Input bind:value={rentPrice} disabled={!inRent} label="Precio de Renta" />
		</div>
	</div>
</div>
