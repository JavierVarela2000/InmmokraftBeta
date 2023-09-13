<script lang="ts">
	// @ts-nocheck
	import SearchHeader from '$lib/components/SearchHeader.svelte';
	import SimilarsSlider from '$lib/components/SimilarsSlider.svelte';
	import SliderGlass from '$lib/components/SliderGlass.svelte';
	import CardBody from './CardBody.svelte';

	import { enhance, type SubmitFunction } from '$app/forms';
	import { supabaseClient } from '$lib/supabase';
	import type { PageData } from './$types';

	import { properties } from '$lib/stores/properties';

	export let data: PageData;

	$properties = data.properties;

	const submitLogout: SubmitFunction = async ({ cancel }) => {
		const { error } = await supabaseClient.auth.signOut();
		if (error) {
			console.log(error);
		}
		cancel();
	};
</script>

<div class="absolute w-full h-[875px] top-0 left-0 -z-20 md:h-[674px]">
	<img class="block w-full h-full object-cover" src="/img_header.jpg" alt="" />
</div>

<div class="absolute bg-[#0D263B]/60 top-0 left-0 w-full h-[875px] -z-10 md:h-[674px]" />
<header class="z-40 pt-40 text-white h-[875px] md:h-[674px]">
	<div class="w-full max-w-xs mx-auto flex justify-around mt-6 md:w-auto -translate-y-24">
		<div class="flex gap-3 w-full justify-center">
			<div class="w-4">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
					><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
						d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
						fill="#ffffff"
					/></svg
				>
			</div>
			<div class="w-4">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
					><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
						d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
						fill="#ffffff"
					/></svg
				>
			</div>
			<div class="w-6">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
					><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
						d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
						fill="#ffffff"
					/></svg
				>
			</div>
		</div>
		<div class="flex gap-2 w-full justify-center">
			<div class="w-6">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
					><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
						d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
						fill="#ffffff"
					/></svg
				>
			</div>
			<span class=" text-white text-sm">(+593) 1990 6886</span>
		</div>
	</div>
	<h4 class="text-center mb-6 md:text-xl">¡BIENVENIDO A TU NUEVO HOGAR!</h4>
	<h2 class=" text-center text-3xl md:text-4xl">Somos Tu Solución Inmobiliaria</h2>
	<!--Formulario de Busqueda-->
	<SearchHeader sufix={'properties'} />
</header>

<main class="">
	<section class="flex flex-col">
		<div class="py-5">
			<h1 class="text-3xl mt-9 font-semibold text-center text-blue-dark md:text-4xl">
				Propiedades en Venta
			</h1>
			<h2 class="text-center text-lg mt-8 text-gray-500 md:text-xl">
				Te ayudamos a comprar <br />
				y <br /> vender tu propiedad
			</h2>
		</div>

		<SimilarsSlider />
		<a href="/properties" class="bg-blue-light text-white my-12 px-8 py-3 rounded-sm mx-auto inline"
			>Ver Más</a
		>
	</section>
	<section class="  py-7 bg-slate-100">
		<h2 class="text-3xl mt-9 font-semibold text-center text-blue-dark xl:text-4xl">
			¿Quieres Comprar <br class="md:hidden" /> Una Casa?
		</h2>

		<h3 class="text-center text-lg mt-8 text-gray-500">Te ayudamos a encontrar tu casa ideal</h3>
		<div
			class="my-8 px-5 max-w-4xl mx-auto flex flex-wrap gap-6 items-center justify-center 2xl:max-w-[1550px]"
		>
			<CardBody src="icons/home.png" tittle="Lorem Ipsum"
				>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
				been the industry's standard</CardBody
			>
			<CardBody src="icons/family.png" tittle="Lorem Ipsum"
				>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
				been the industry's standard</CardBody
			>
			<CardBody src="icons/key-house.png" tittle="Lorem Ipsum"
				>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
				been the industry's standard</CardBody
			>
			<CardBody src="icons/search-home.png" tittle="Lorem Ipsum"
				>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
				been the industry's standard</CardBody
			>
		</div>
	</section>
	<section>
		<SliderGlass />
	</section>
	<section
		id="nosotros"
		class="w-full py-14 md:pt-24 2xl:flex 2xl:gap-52 2xl:items-center 2xl:justify-center 2xl:py-36 "
	>
		<div class="relative flex justify-center">
			<img class="block w-5/6 max-w-xl 2xl:w-[570px] shadow-xl" src="/icons/logo.png" alt="" />
		</div>
		<div class="flex flex-col my-12 items-center 2xl:items-start">
			<span class="block text-center text-3xl text-blue-dark font-semibold mb-12"
				>Acerca De Nosotros</span
			>

			<p class=" px-9 text-center text-gray-500 max-w-lg 2xl:text-start 2xl:px-0">
				Arcu mattis ante sed est eget nibh velit praesent. Turpis at pharetra est quam volutpat sed
				eget convallis. In morbi turpis tortor nisl vel purus. Nisl massa scelerisque quisque quam
				nulla nec risus duis vitae.
				<br /> <br />
				Morbi ut egestas commodo enim in leo hendrerit euismod. Praesent pellentesque congue sit nunc
				eget. Convallis facilisi ut condimentum ac lorem phasellus amet.
			</p>
			<div
				class="bg-blue-light text-white font-semibold px-8 py-3 rounded-sm mx-auto inline mt-12 2xl:mx-0"
			>
				Saber Más
			</div>
		</div>
	</section>
	<section
		id="contactos"
		class="bg-slate-700 mb-96 2xl:mb-0  h-[700px] bg-[url('/img_header.jpg')] bg-center bg-no-repeat bg-cover relative md:h-[600px] 2xl:h-[750px]"
	>
		<div
			class="w-full h-full text-white bg-blue-dark/50 relative py-10 2xl:flex 2xl:justify-center 2xl:items-center 2xl:gap-28"
		>
			<div>
				<h2 class="text-3xl mt-9 text-center text-white px-7 md:text-4xl 2xl:px-0">
					¿Quieres Comprar o Vender una Propiedad?
				</h2>
				<span class="block text-center text-2xl mt-8 text-white md:text-3xl 2xl:text-start">
					Nosotros te Asesoramos
				</span>
				<p class="text-center p-8 max-w-lg mx-auto 2xl:px-0 2xl:text-start 2xl:mx-0">
					Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
					consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
				</p>
			</div>

			<form
				on:submit|preventDefault
				class="absolute max-w-lg border-solid border border-gray-300 bg-white rounded-sm w-11/12 left-0 right-0 mx-auto h-[530px] bottom-0 translate-y-1/2 py-6 px-3 md:px-9 2xl:relative 2xl:translate-y-0 2xl:mx-0"
			>
				<div class="relative w-full my-7">
					<input
						type="text"
						id="username"
						class="border-b w-full focus:placeholder:text-white block text-gray-600 border-gray-400 py-1 focus:outline-none focus:border-blue-light focus:border-b-2 transition-colors peer"
						autocomplete="off"
						placeholder="Tu Nombre"
						required
					/>
					<label
						for="username"
						class="absolute left-0 -top-5 text-blue-light font-semibold cursor-text peer-focus:-top-6  transition-all text-sm"
						>NOMBRE</label
					>
				</div>
				<div class="relative w-full my-12">
					<input
						type="number"
						id="username"
						class="border-b w-full focus:placeholder:text-white block text-gray-600 border-gray-400 py-1 focus:outline-none focus:border-blue-light focus:border-b-2 transition-colors peer"
						autocomplete="off"
						placeholder="nombre@ejemplo.com"
						required
					/>
					<label
						for="username"
						class="absolute left-0 -top-5 text-blue-light font-semibold cursor-text peer-focus:-top-6  transition-all text-sm"
						>TELÉFONO</label
					>
				</div>
				<div class="relative w-full my-12">
					<input
						type="mail"
						id="username"
						class="border-b w-full focus:placeholder:text-white block text-gray-600 border-gray-400 py-1 focus:outline-none focus:border-blue-light focus:border-b-2 transition-colors peer"
						autocomplete="off"
						placeholder="nombre@ejemplo.com"
						required
					/>
					<label
						for="username"
						class="absolute left-0 -top-5 text-blue-light font-semibold cursor-text peer-focus:-top-6  transition-all text-sm"
						>CORREO ELECTRÓNICO</label
					>
				</div>
				<div class="relative w-full mt-12">
					<textarea
						type="text"
						id="username"
						class="border-b h-28 w-full focus:placeholder:text-white block text-gray-600 border-gray-400 py-1 focus:outline-none focus:border-blue-light focus:border-b-2 transition-colors peer"
						autocomplete="off"
						placeholder="Escribe tu mensaje..."
						required
					/>
					<label
						for="username"
						class="absolute left-0 -top-5 text-blue-light font-semibold cursor-text peer-focus:-top-6  transition-all text-sm"
						>TU MENSAJE</label
					>
				</div>

				<input
					class=" inline-block mt-7 text-white bg-orange-500 w-full h-12 rounded-sm"
					type="submit"
					value="ENVIAR MENSAJE"
				/>
			</form>
		</div>
	</section>
</main>

<style>
</style>
