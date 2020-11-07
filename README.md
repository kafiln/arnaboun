## Cahier des charges :

- 2 champs de date et un bouton 'Soumettre'
- Quand deux dates valides sont fournies, affichez en-dessous le nombre de jours entre ces deux dates
- Il est possible de sauvegarder deux dates valides ainsi que leur différence en BDD en cliquant sur un bouton. Ces dates sauvegardées s'affichent dans une liste. Cette liste de dates sauvegardées ainsi que leurs différences sont également affichées au chargement de la page.

## Stack à utiliser (utiliser tous les éléments cités) :

- React pour l'application front
- Redux pour stocker coté front les dates sauvegardées à afficher
- Redux-Saga pour faire le call api qui permet de sauvegarder les dates en backend + récupérer du backend la liste des dates déjà sauvegardées au démarrage de l'application front
- Hooks pour la gestion du state locale des composants React
- styled-components pour styliser les composant
- Git/GitHub/CircleCI (implémenter au moins un test dans la CI)
- Flask (Python) pour l'api
- SQLALchemy (pour les migrations)
- BDD postgres
- La BDD ainsi que l'application Flask doivent être dockerisés (utilisation de docker-compose)

## Notes :

- Pour créer rapidement un projet, l’outil “Create React App” est recommandé, mais pas obligatoire.
- Inutile de faire de grandes animations ou autres implémentations coûteuses en temps et hors périmètre, mais une expérience utilisateur de qualité sera appréciée.
- Une fois terminé, envoies le lien de ton repository Github à contact@nimbleways.com
