<script lang="ts">
	//@ts-nocheck
	import Input from '$lib/components/Input.svelte';
	import InputMail from '$lib/components/InputMail.svelte';

	export let requerimientos = {
		nombre: '',
		correo: '',
		telefono: '',
		presupuesto: '',
		habitaciones: '',
		mascotas: '',
		numeroMascotas: ''
	};
	let mascotas;
	$: {
		mascotas = requerimientos.mascotas === 'Si' ? true : false;
	}
</script>

<div class="pt-24 min-h-screen bg-gray-100 pb-10">
	<div class="w-11/12 mx-auto flex flex-col gap-3">
		<h1 class="font-semibold text-3xl text-blue-dark capitalize">Formulario de requerimientos</h1>
		<h5 class=" text-sm text-gray-500 capitalize">
			Hola un gusto saludarte, te presentamos el siguiente formulario que nos ayudara a encontrar tu
			vivienda ideal, por favor ayúdanos llenando en su totalidad.
		</h5>
	</div>
	<div class="w-11/12 mx-auto py-10">{JSON.stringify(requerimientos)}</div>
	<form class="w-11/12 mx-auto">
		<div class="grid xl:grid-cols-2 gap-10  pb-9 bg-white p-10 shadow mt-10">
			<div class=" font-semibold text-blue-dark text-2xl pt-0 xl:col-span-2">Datos De Contacto</div>
			<Input
				bind:value={requerimientos.nombre}
				required={true}
				classContainer={'capitalize'}
				label="nombre y apellido"
			/>
			<InputMail required={true} bind:value={requerimientos.correo} />
			<Input
				required={true}
				bind:value={requerimientos.telefono}
				classContainer={'capitalize'}
				label="Teléfono"
			/>
		</div>
		<div class="grid xl:grid-cols-2 gap-10  pb-9 bg-white p-10 shadow mt-10">
			<div class=" font-semibold text-blue-dark text-2xl pt-0 xl:col-span-2">
				Datos De Tu Propiedad Ideal
			</div>

			<Input
				required={true}
				bind:value={requerimientos.presupuesto}
				classContainer={'capitalize'}
				label="¿cúal es tu presupuesto?"
			/>

			<select
				bind:value={requerimientos.habitaciones}
				name=""
				id=""
				class="border-b capitalize border-gray-300 py-1 text-gray-500 text-sm transition-colors  focus:outline-none focus:placeholder:text-white"
				><option value="" selected disabled
					>Número de habitaciones (especificas para dormitorios)
				</option>
				{#each [1, 2, 3, 4, '+5'] as item}
					<option value={item}>{item}</option>
				{/each}
			</select>
			<select
				bind:value={requerimientos.mascotas}
				name=""
				id=""
				class="border-b capitalize border-gray-300 py-1 text-gray-500 text-sm transition-colors  focus:outline-none focus:placeholder:text-white"
				><option value="" selected disabled>¿Tienes Mascotas? </option>

				<option value="Si">Si</option>
				<option value="No">No</option>
			</select>

			<Input
				required={true}
				bind:disabled={mascotas}
				bind:value={requerimientos.numeroMascotas}
				classContainer={'capitalize'}
				label="¿cuantas mascotas tienes?"
			/>
		</div>
	</form>
</div>
