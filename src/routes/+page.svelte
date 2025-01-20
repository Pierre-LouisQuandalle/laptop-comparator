<script lang="ts">
  import LaptopCard from '$lib/components/LaptopCard.svelte';
  import LaptopFilters from '$lib/components/LaptopFilters.svelte';
  import type { Laptop } from '$lib/types/Laptop';
  import laptopsData from '$lib/data/laptops.json';

  const laptops: Laptop[] = laptopsData.laptops;
  let filteredLaptops = laptops;
  let recommendedIds: number[] = [];
  let showingRecommendations = false;

  // Charger les recommandations au démarrage
  async function initRecommendations() {
    try {
      const response = await fetch('/api/recommendations');
      const data = await response.json();
      recommendedIds = data.recommendations;
    } catch (error) {
      console.error('Erreur lors du chargement des recommandations:', error);
    }
  }

  // Exécuter au montage du composant
  initRecommendations();

  function handleFiltersChange(filtered: Laptop[]) {
    filteredLaptops = filtered;
  }

  async function loadRecommendations() {
    try {
      if (showingRecommendations) {
        // Retour à l'état initial
        filteredLaptops = laptops;
        showingRecommendations = false;
        return;
      }
      
      // Filtrer pour n'afficher que les recommandations
      filteredLaptops = laptops.filter(laptop => recommendedIds.includes(laptop.id));
      showingRecommendations = true;
    } catch (error) {
      console.error('Erreur lors du chargement des recommandations:', error);
    }
  }
</script>

<main class="container mx-auto px-4 py-8">
  <h1 class="text-3xl font-bold text-center mb-8">Comparateur d'Ordinateurs Portables</h1>
  
  <div class="flex justify-center mb-6">
    <button
      on:click={loadRecommendations}
      class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
    >
      {showingRecommendations ? 'Voir tous les produits' : 'Voir les recommandations'}
    </button>
  </div>
  
  {#if !showingRecommendations}
    <LaptopFilters {laptops} onFiltersChange={handleFiltersChange} />
  {/if}
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each filteredLaptops as laptop (laptop.id)}
      <LaptopCard 
        {laptop}
        isRecommended={recommendedIds.includes(laptop.id)}
      />
    {/each}
  </div>
</main>
