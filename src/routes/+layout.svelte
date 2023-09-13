<script lang="ts">
	import '../app.css';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<Nav session={data.session} />

<slot />

<Footer />
