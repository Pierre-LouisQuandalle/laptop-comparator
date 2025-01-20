<script lang="ts">
  import type { Laptop } from '$lib/types/Laptop';
  
  export let laptops: Laptop[];
  export let onFiltersChange: (filtered: Laptop[]) => void;

  let priceRange = [0, 2000];
  let selectedBrand = 'all';
  let ssdOnly = false;

  // Obtenir la liste unique des marques
  $: brands = ['all', ...new Set(laptops.map(l => l.brand))];

  // Fonction de filtrage
  function applyFilters() {
    const filtered = laptops.filter(laptop => {
      const matchesPrice = laptop.price >= priceRange[0] && laptop.price <= priceRange[1];
      const matchesBrand = selectedBrand === 'all' || laptop.brand === selectedBrand;
      const matchesSsd = !ssdOnly || laptop.storage.toLowerCase().includes('ssd');
      
      return matchesPrice && matchesBrand && matchesSsd;
    });
    
    onFiltersChange(filtered);
  }

  // Réagir aux changements des filtres
  $: {
    priceRange, selectedBrand, ssdOnly;
    applyFilters();
  }
</script>

<div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6">
  <h2 class="text-xl font-bold mb-4 dark:text-white">Filtres</h2>
  
  <!-- Filtre de prix -->
  <div class="mb-4">
    <label for="priceMin" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
      Prix: {priceRange[0]}€ - {priceRange[1]}€
    </label>
    <div class="flex gap-4 items-center">
      <input
        id="priceMin"
        type="range"
        bind:value={priceRange[0]}
        min="0"
        max="2000"
        class="w-full"
      />
      <input
        id="priceMax"
        type="range"
        bind:value={priceRange[1]}
        min="0"
        max="2000"
        class="w-full"
      />
    </div>
  </div>

  <!-- Filtre de marque -->
  <div class="mb-4">
    <label 
      for="brandSelect" 
      class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
    >
      Marque
    </label>
    <select
      id="brandSelect"
      bind:value={selectedBrand}
      class="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
    >
      {#each brands as brand}
        <option value={brand}>
          {brand === 'all' ? 'Toutes les marques' : brand}
        </option>
      {/each}
    </select>
  </div>

  <!-- Filtre SSD -->
  <div class="flex items-center">
    <input
      type="checkbox"
      id="ssdOnly"
      bind:checked={ssdOnly}
      class="h-4 w-4 text-blue-600"
    />
    <label for="ssdOnly" class="ml-2 text-sm text-gray-700">
      SSD uniquement
    </label>
  </div>
</div> 