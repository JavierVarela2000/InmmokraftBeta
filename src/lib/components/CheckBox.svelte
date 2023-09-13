<script lang="ts">
	//@ts-nocheck
	export let checked;
	export let label = '';
	export let disabled = false;
</script>

<label class="inline-flex items-center cursor-pointer">
	<input
		type="checkbox"
		class="text-blue-dark h-4 w-4 inline-block cursor-pointer {disabled
			? 'cursor-not-allowed opacity-50'
			: ''}"
		bind:checked
		{disabled}
	/>
	{#if label}
		<span class="ml-2 text-sm {disabled ? 'text-gray-400' : 'text-gray-800'}">
			{label}
		</span>
	{/if}
</label>
