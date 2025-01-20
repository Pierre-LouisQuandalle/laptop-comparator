<script lang="ts">
	import { theme } from '$lib/stores/theme';
	import Icon from '@iconify/svelte';
	import '../app.css';
	let { children } = $props();

	function toggleTheme() {
		theme.update(t => t === 'dark' ? 'light' : 'dark');
	}
</script>

<div class="min-h-screen transition-colors duration-300 dark:bg-gray-900">
	<nav class="p-4 flex justify-end">
		<button
			on:click={toggleTheme}
			class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
			aria-label="Toggle theme"
		>
			{#if $theme === 'dark'}
				<Icon icon="ph:sun-bold" class="w-6 h-6 text-yellow-400" />
			{:else}
				<Icon icon="ph:moon-bold" class="w-6 h-6 text-gray-600" />
			{/if}
		</button>
	</nav>

	<slot />
</div>
