<script>
	export let src = '';
	export let tittle = '';
</script>

<article class="flex flex-col items-center shadow bg-white px-8 pb-11 w-[350px]">
	<img {src} class=" w-14 mb-14 mt-16" alt="" />
	<h3 class="text-2xl text-blue-dark font-semibold">{tittle}</h3>
	<p class=" text-center mt-4 text-gray-400"><slot /></p>
</article>
