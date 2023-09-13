<script>
	//@ts-nocheck
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import { Autoplay, Pagination } from 'swiper';
	import Card from '$lib/components/Card.svelte';
	import 'swiper/css';
	import 'swiper/css/pagination';

	const getProperties = async (id) => {
		let res;
		await fetch(`/api/properties-10`)
			.then((response) => response.json())
			.then((obj) => (res = obj.body));
		// res = JSON.parse(res.text)
		return res;
	};
</script>

<div class=" mt-5  mx-[1%] max-w-2xl sm:mx-auto lg:max-w-5xl 2xl:max-w-[1400px]">
	{#await getProperties() then properties}
		<Swiper
			modules={[Autoplay, Pagination]}
			pagination={(true, { clickable: true })}
			autoplay={{
				delay: 2000,
				disableOnInteraction: false,
				pauseOnMouseEnter: true
			}}
			breakpoints={{
				// cuando la ventana es >= 640px
				680: {
					slidesPerView: 2
				},
				// cuando la ventana es >= 1024px
				1024: {
					slidesPerView: 3
				},
				1536: {
					slidesPerView: 4
				}
			}}
			spaceBetween={0}
			slidesPerView={1}
			class=" h-[470px] cursor-grab"
		>
			<!-- promise was fulfilled -->

			{#each properties as propiedad}
				<SwiperSlide class=""
					><div class="flex justify-center">
						<Card
							id={propiedad.id}
							tittle={propiedad.titulo}
							area={propiedad.area}
							beds={propiedad.cuartos}
							bath={propiedad.banios}
							garage={propiedad.garage}
							imagenes={propiedad.imagenes}
							inRent={propiedad.en_renta}
							inSale={propiedad.en_venta}
							rentPrice={propiedad.precio_renta}
							salePrice={propiedad.precio_venta}
							subtittle={propiedad.referencias}
						/>
					</div></SwiperSlide
				>
			{/each}
		</Swiper>
	{/await}
</div>
