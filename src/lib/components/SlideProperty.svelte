<script lang="ts">
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import { FreeMode, Thumbs, Navigation, A11y } from 'swiper';
	import 'swiper/css';
	import 'swiper/css/free-mode';
	import 'swiper/css/navigation';
	import 'swiper/css/thumbs';
	export let images = [];
	let thumbsSwiper;
	const setThumbsSwiper = async (e) => {
		const [swiper] = await e.detail;
		// set Thumbs swiper instance

		thumbsSwiper = swiper;
	};
</script>

<div>
	<Swiper
		class=" h-56 cursor-grab sm:h-[70vh] "
		navigation={true}
		modules={[FreeMode, Navigation, Thumbs, A11y]}
		thumbs={{ swiper: thumbsSwiper }}
	>
		{#each images as img}
			<SwiperSlide class="relative"
				><div class="absolute w-full h-full bg-blue-dark/20 " />
				<img
					class="h-56 w-full block object-cover sm:h-[70vh]"
					src={img.src}
					alt={img.fileName}
				/></SwiperSlide
			>
		{/each}
	</Swiper>

	<Swiper
		breakpoints={{
			1024: {
				slidesPerView: 5
			},
			1280: {
				slidesPerView: 6
			},
			1440: {
				slidesPerView: 8
			}
		}}
		class="h-16 mt-2 sm:h-28"
		onSwiper={setThumbsSwiper}
		spaceBetween={10}
		slidesPerView={3}
		freeMode={true}
		watchSlidesProgress={true}
		modules={[FreeMode, Navigation, Thumbs, A11y]}
		on:swiper={setThumbsSwiper}
	>
		{#each images as img}
			<SwiperSlide class="">
				<div class="bg-blue-dark bg-black ">
					<img
						class=" h-16 object-cover w-full block opacity-70 cursor-pointer  hover:opacity-100 sm:h-28"
						src={img.src}
						alt={img.fileName}
					/>
				</div>
			</SwiperSlide>
		{/each}
	</Swiper>
</div>
