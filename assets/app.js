// Met l’année courante dans le footer
document.getElementById('year').textContent = new Date().getFullYear();


// Exemple : ouvrir le premier <details> par défaut (optionnel)
const firstDetails = document.querySelector('details');
if(firstDetails) firstDetails.open = true;
