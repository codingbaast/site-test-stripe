// Année dynamique dans le footer
document.getElementById('year').textContent = new Date().getFullYear();


// Scroll doux pour les ancres
for (const a of document.querySelectorAll('a[href^="#"]')) {
a.addEventListener('click', e => {
const id = a.getAttribute('href').slice(1);
const el = document.getElementById(id);
if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth', block:'start'}); }
});
}
