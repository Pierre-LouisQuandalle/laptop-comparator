import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import laptopsData from '$lib/data/laptops.json';
import type { Laptop } from '$lib/types/Laptop';

export const GET: RequestHandler = async () => {
  const laptops: Laptop[] = laptopsData.laptops;
  
  // Trier par prix et prendre les 3 moins chers
  const recommendations = laptops
    .sort((a, b) => a.price - b.price)
    .slice(0, 3)
    .map(laptop => laptop.id);

  return json({ recommendations });
}; 