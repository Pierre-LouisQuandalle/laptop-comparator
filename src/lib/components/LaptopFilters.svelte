<script lang="ts">
	import type { Laptop } from '$lib/types/Laptop';

	interface Props {
		laptops: Laptop[];
		onFiltersChange: (filtered: Laptop[]) => void;
	}

	let { laptops, onFiltersChange }: Props = $props();

	let priceRange = $state([0, 2000]);
	let selectedBrand = $state('all');
	let ssdOnly = $state(false);
	let ram32Only = $state(false);

	// Obtenir la liste unique des marques
	let brands = $derived(['all', ...new Set(laptops.map((l) => l.brand))]);

	// Fonction de filtrage
	let filteredLaptops = $derived(
		laptops.filter((laptop) => {
			const matchesPrice = laptop.price >= priceRange[0] && laptop.price <= priceRange[1];
			const matchesBrand = selectedBrand === 'all' || laptop.brand === selectedBrand;
			const matchesSsd = !ssdOnly || laptop.storage.toLowerCase().includes('ssd');
			const matches32GB = !ram32Only || laptop.ram.includes('32GB');

			return matchesPrice && matchesBrand && matchesSsd && matches32GB;
		})
	);

	// Réagir aux changements des filtres
	$effect(() => {
		onFiltersChange(filteredLaptops);
	});
</script>

<div class="mb-6 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
	<h2 class="mb-4 text-xl font-bold dark:text-white">Filtres</h2>

	<!-- Filtre de prix -->
	<div class="mb-4">
		<label for="priceMin" class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
			Prix: {priceRange[0]}€ - {priceRange[1]}€
		</label>
		<div class="flex items-center gap-4">
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
			class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
		>
			Marque
		</label>
		<select
			id="brandSelect"
			bind:value={selectedBrand}
			class="w-full rounded-md border p-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
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
		<input type="checkbox" id="ssdOnly" bind:checked={ssdOnly} class="h-4 w-4 text-blue-600" />
		<label for="ssdOnly" class="ml-2 text-sm text-gray-700 dark:text-gray-300">
			SSD uniquement
		</label>
	</div>

	<!-- Filtre 32GB -->
	<div class="mt-2 flex items-center">
		<input type="checkbox" id="ram32Only" bind:checked={ram32Only} class="h-4 w-4 text-blue-600" />
		<label for="ram32Only" class="ml-2 text-sm text-gray-700 dark:text-gray-300">
			32GB RAM uniquement
		</label>
	</div>
</div>
