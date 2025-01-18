# Laptop Comparator\n\nA web application to compare laptop specifications and prices.

Test Technique
==============

Ce test technique est conçu pour évaluer tes compétences en développement web dans un environnement comprenant SvelteKit, Bun, TailwindCSS, et Typescript. Tu vas développer une application web interactive : un comparateur d'ordinateurs portables.

Temps estimé : 3 jours

* * * * *

Objectifs généraux
------------------

-   Mettre en place un projet avec les outils de la stack utilisée sur bonforfait.fr.

-   Créer des composants frontend interactifs.

-   Manipuler des données dynamiques et mettre en place des filtres.

-   Créer des routes API pour des interactions client-serveur.

Le principal critère est ta capacité à résoudre les problèmes, expliquer les choix faits, et remonter les difficultés ou points bloquants rencontrés.

* * * * *

### Phase 1 : Initialisation du projet

1.  Suis les étapes pour initialiser un projet avec bunx sv create :

-   Consulte la documentation officielle ici :[  https://svelte.dev/docs/cli/sv-create](https://svelte.dev/docs/cli/sv-create).

-   Exécute la commande suivante :\
    bunx sv create lapotop-comparator

-   Lors de l'initialisation, sélectionne les options suivantes :

-   Typescript : Oui

-   TailwindCSS : Oui

1.  Démarre le serveur de développement et vérifie que tout fonctionne :\
    bun dev

2.  Ajoute un fichier README.md au projet contenant :

-   Une description du projet.

-   Les étapes pour installer et démarrer l'application.

-   Le fichier pourra être complété au fur et à mesure avec toute information utile pour un développeur qui souhaite comprendre l'application.

* * * * *

### Phase 2 : Affichage et design d'une carte produit

1.  Crée un composant LaptopCard.svelte qui affiche les informations principales d'un ordinateur portable :

-   Nom

-   Prix

-   Processeur

-   RAM

-   Disque dur

-   Description courte

3.  Utilise TailwindCSS pour styliser le composant :

-   Assure-toi que le design est responsive.

-   Ajoute des icônes pertinentes (par exemple, pour le processeur ou la RAM), par exemple avec Iconify :[  https://iconify.design/docs/icon-components/svelte/](https://iconify.design/docs/icon-components/svelte/).

-   Inclue une barre de progression indiquant une "performance globale" (un score simulé entre 0 et 100), avec des couleurs pour refléter différents niveaux de performance.

-   Éventuellement, ajoute une image de l'ordinateur.

5.  Intègre ce composant dans la page principale (src/routes/+page.svelte) et affiche une carte statique en attendant d'avoir des données dynamiques.

* * * * *

### Phase 3 : Création d'une base de données JSON

1.  Utilise Cursor.ai ou un autre outil d'IA pour générer un fichier laptops.json contenant une base de données de 10 ordinateurs portables. Chaque objet doit inclure :

-   id: identifiant unique

-   name: nom de l'ordinateur

-   price: prix (en euros)

-   processor: type de processeur

-   ram: quantité de RAM

-   storage: type et taille du stockage (SSD/HDD)

-   performance: un score de performance (0-100)

-   shortDescription: une description courte de l'ordinateur à afficher sur la carte

3.  Charge ce fichier JSON dans l'application et affiche toutes les cartes sur la page.

* * * * *

### Phase 4 : Mise en place de filtres

1.  Implémente trois filtres interactifs :

-   Prix : un slider pour définir une plage de prix.

-   Marque : une liste déroulante pour choisir parmi 2-3 marques simulées.

-   Processeur : une case à cocher pour filtrer uniquement les ordinateurs avec un SSD.

3.  Lorsque les filtres sont modifiés, affiche uniquement les ordinateurs qui correspondent aux critères sélectionnés. Les résultats doivent se mettre à jour en temps réel.

* * * * *

### Phase 5 : Création d'une route côté serveur

1.  Crée une route API (/api/recommendations) qui renvoie les trois ordinateurs les moins chers en json

2.  Implémente un bouton "Recommandations" sur la page principale. Lorsqu'il est cliqué :

-   Une requête est envoyée à la route API.

-   L'API retourne les identifiants des trois ordinateurs recommandés.

-   Ajoute un style visuel aux cartes correspondantes (par exemple, une bordure jaune ou tout autre effet visuel pertinent).

* * * * *

Code Source
-----------

Publie le code source du projet sur GitHub et ajoute les informations suivantes dans le fichier README.md :

-   Une description du projet et des fonctionnalités implémentées.

-   Toute note ou documentation supplémentaire que tu juges utile.

* * * * *

Critères d'évaluation
---------------------

1.  Approche : C'est le critère le plus important. Ta capacité à résoudre les problèmes, expliquer ta démarche, exposer les difficultés rencontrées et justifier les choix faits est prioritaire.

2.  Fonctionnalités : Toutes les étapes ont-elles été réalisées ?

3.  Qualité du code : Lisibilité, structure, respect des bonnes pratiques.

4.  Design : Esthétique, responsivité et utilisation de TailwindCSS.

* * * * *

Bonne chance !