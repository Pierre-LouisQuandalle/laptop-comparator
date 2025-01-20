import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Récupérer la préférence sauvegardée ou la préférence système
const userTheme = browser ? (localStorage.getItem('theme') || 
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')) : 'light';

export const theme = writable(userTheme);

// Sauvegarder le choix de l'utilisateur
theme.subscribe(value => {
  if (browser) {
    localStorage.setItem('theme', value);
    if (value === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}); 