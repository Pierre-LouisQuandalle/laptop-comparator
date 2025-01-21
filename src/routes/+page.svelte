<script lang="ts">
	import { onMount } from 'svelte';
	import LaptopCard from '$lib/components/LaptopCard.svelte';
	import LaptopFilters from '$lib/components/LaptopFilters.svelte';
	import type { Laptop } from '$lib/types/Laptop';
	import laptopsData from '$lib/data/laptops.json';

	const laptops: Laptop[] = laptopsData.laptops;
	let filteredLaptops = $state(laptops);
	let recommendedIds: number[] = $state([]);
	let showingRecommendations = $state(false);

	// Charger les recommandations au démarrage
	onMount(async () => {
		try {
			const response = await fetch('/api/recommendations');
			const data = await response.json();
			recommendedIds = data.recommendations;
		} catch (error) {
			console.error('Erreur lors du chargement des recommandations:', error);
		}
	});

	async function loadRecommendations() {
		try {
			if (showingRecommendations) {
				// Retour à l'état initial
				filteredLaptops = laptops;
				showingRecommendations = false;
				return;
			}

			// Filtrer pour n'afficher que les recommandations
			filteredLaptops = laptops.filter((laptop) => recommendedIds.includes(laptop.id));
			showingRecommendations = true;
		} catch (error) {
			console.error('Erreur lors du chargement des recommandations:', error);
		}
	}
</script>

<main class="container mx-auto px-4 py-8">
	<h1 class="mb-8 text-center text-3xl font-bold">Comparateur d'Ordinateurs Portables</h1>

	<div class="mb-6 flex justify-center">
		<button
			onclick={loadRecommendations}
			class="rounded-lg bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
		>
			{showingRecommendations ? 'Voir tous les produits' : 'Voir les recommandations'}
		</button>
	</div>

	{#if !showingRecommendations}
		<LaptopFilters {laptops} bind:filteredLaptops />
	{/if}

	<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each filteredLaptops as laptop (laptop.id)}
			<LaptopCard {laptop} isRecommended={recommendedIds.includes(laptop.id)} />
		{/each}
	</div>
</main>
