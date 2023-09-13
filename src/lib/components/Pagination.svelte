<script>
	//@ts-nocheck
	import { page } from '$app/stores';
	export let totalItems;
	export let itemsPerPage = 16;
	export let href = '';
	$: pages = Array(Math.ceil(totalItems / itemsPerPage));
</script>

<div class="flex gap-3 w-full justify-center">
	{#each pages as _, i}
		<a
			href="{href}{i + 1}"
			class=" w-10 h-10 shadow transition-colors rounded-full inline-flex justify-center items-center hover:bg-blue-light hover:text-white {Number(
				$page.params.page
			) ===
			i + 1
				? 'bg-blue-dark text-white'
				: 'bg-white'}"
		>
			{i + 1}
		</a>
	{/each}
</div>
