<script lang="ts">
  import Icon from '@iconify/svelte';
  import type { Laptop } from '$lib/types/Laptop';

  export let laptop: Laptop;
  export let isRecommended = false;

  // Fonction pour déterminer la couleur de la barre de progression
  function getPerformanceColor(score: number): string {
    if (score >= 80) return "bg-green-500";
    if (score >= 60) return "bg-yellow-500";
    return "bg-red-500";
  }
</script>

<div class="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 max-w-sm
  {isRecommended ? 'ring-2 ring-yellow-400' : ''} 
  hover:scale-[1.02] hover:-translate-y-1 cursor-pointer">
  {#if isRecommended}
    <div class="absolute -top-2 -right-2 bg-yellow-400 text-white px-2 py-1 rounded-full text-sm font-semibold">
      Recommandé
    </div>
  {/if}

  <!-- Image -->
  <img 
    src={laptop.image} 
    alt={laptop.name}
    class="w-full h-48 object-cover rounded-lg mb-4"
  />

  <!-- Titre et Prix -->
  <div class="flex justify-between items-center mb-4">
    <h2 class="text-xl font-bold text-gray-800 dark:text-white">{laptop.name}</h2>
    <span class="text-lg font-semibold text-green-600">{laptop.price}€</span>
  </div>

  <!-- Spécifications -->
  <div class="space-y-2 mb-4">
    <div class="flex items-center gap-2">
      <Icon icon="mdi:processor" class="text-gray-800 dark:text-gray-200" />
      <span class="text-gray-700 dark:text-gray-300">{laptop.processor}</span>
    </div>
    
    <div class="flex items-center gap-2">
      <Icon icon="mdi:memory" class="text-gray-800" />
      <span class="text-gray-700">{laptop.ram}</span>
    </div>
    
    <div class="flex items-center gap-2">
      <Icon icon="mdi:harddisk" class="text-gray-800" />
      <span class="text-gray-700">{laptop.storage}</span>
    </div>
  </div>

  <!-- Description -->
  <p class="text-gray-600 dark:text-gray-400 mb-4">{laptop.shortDescription}</p>

  <!-- Barre de performance -->
  <div class="mb-2">
    <div class="flex justify-between items-center mb-1">
      <span class="text-sm font-medium text-gray-700">Performance</span>
      <span class="text-sm font-medium text-gray-700">{laptop.performance}%</span>
    </div>
    <div class="w-full bg-gray-200 rounded-full h-2.5">
      <div
        class="h-2.5 rounded-full transition-all duration-300 {getPerformanceColor(laptop.performance)}"
        style="width: {laptop.performance}%"
      ></div>
    </div>
  </div>
</div> 