<script>
	import SearchHeader from '$lib/components/SearchHeader.svelte';
</script>

<div>
	<div class="bg-[url('/img_header.jpg')] w-full h-96 bg-center ">
		<div class="w-full h-full bg-blue-dark/50 flex items-center justify-center">
			<SearchHeader />
		</div>
	</div>
</div>
<slot><!-- optional fallback --></slot>
