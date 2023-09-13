<script>
	//@ts-nocheck
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import { Autoplay, Pagination, Navigation } from 'swiper';
	import CardGlass from '$lib/components/CardGlass.svelte';
	import 'swiper/css';
	import 'swiper/css/pagination';
	import 'swiper/css/navigation';

	const getProperties = async (id) => {
		let res;
		await fetch(`/api/properties-10`)
			.then((response) => response.json())
			.then((obj) => (res = obj.body));
		// res = JSON.parse(res.text)
		return res;
	};
</script>

<div class="w-full">
	{#await getProperties() then properties}
		<Swiper
			modules={[Autoplay, Pagination, Navigation]}
			navigation={true}
			pagination={(true, { clickable: true })}
			autoplay={{
				delay: 2000,
				disableOnInteraction: false,
				pauseOnMouseEnter: true
			}}
			spaceBetween={0}
			slidesPerView={1}
			class=" h-[75vh] cursor-grab"
		>
			<!-- promise was fulfilled -->

			{#each properties as propiedad}
				<SwiperSlide class=" h-full">
					<CardGlass
						id={propiedad.id}
						tittle={propiedad.titulo}
						imagenes={propiedad.imagenes}
						price={propiedad.precio_renta || propiedad.precio_venta}
						sale={propiedad.en_venta}
					/>
				</SwiperSlide>
			{/each}
		</Swiper>
	{/await}
</div>
