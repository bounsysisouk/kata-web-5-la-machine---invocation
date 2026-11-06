
/**
 * Récupération des éléments du DOM
 */
const formulaireInvocation = document.getElementById('invocation');
const sectionResultat = document.getElementById('resultat');
const elementMessage = document.getElementById('message');
const boutonRecommencer = document.getElementById('recommencer');
const imageCreature = document.getElementById('image-creature');

// Récupération de la carte contenant le formulaire
const carteInvocation = formulaireInvocation.closest('.carte-invocation');

/**
 * Correspondance entre les Bijû et leurs images
 */
const imagesBijus = {
  "Shukaku, le Démon à Une Queue": "images/shukaku.webp",
  "Matatabi, le Démon à Deux Queues": "images/matatabi.png",
  "Isobu, le Démon à Trois Queues": "images/isobu.png",
  "Son Gokû, le Démon à Quatre Queues": "images/son-goku.webp",
  "Kokuô, le Démon à Cinq Queues": "images/kokuo.png",
  "Saiken, le Démon à Six Queues": "images/saiken.png",
  "Chômei, le Démon à Sept Queues": "images/chomei.png",
  "Gyûki, le Démon à Huit Queues": "images/gyuki.png",
  "Kurama, le Démon à Neuf Queues": "images/kurama.png"
};

/**
 * Soumission du formulaire d'invocation
 */
formulaireInvocation.addEventListener('submit', (event) => {

  // Empêche le rechargement de la page
  event.preventDefault();

  // Récupération des données
  const prenom = document.getElementById('prenom').value;
  const creature = document.getElementById('creature').value;

  // Récupération de l'image correspondante
  imageCreature.src = imagesBijus[creature];
  imageCreature.alt = creature;

  // Création du message personnalisé
  elementMessage.textContent =
    `Shinobi ${prenom}, ${creature} a accepté de lier son chakra au tien pour tout le Bloc 1 !`;

  // Affichage du résultat
  carteInvocation.classList.add('cache');
  sectionResultat.classList.remove('cache');

});

/**
 * Réinitialisation de l'invocation
 */
boutonRecommencer.addEventListener('click', () => {

  // Réinitialise le formulaire
  formulaireInvocation.reset();

  // Masque le résultat
  sectionResultat.classList.add('cache');

  // Réaffiche le formulaire
  carteInvocation.classList.remove('cache');

  // Efface l'image précédente
  imageCreature.removeAttribute('src');

});
