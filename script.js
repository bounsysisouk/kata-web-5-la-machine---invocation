
/**
 * Récupération des éléments du DOM
 */
const formulaireInvocation = document.getElementById('invocation');
const sectionResultat = document.getElementById('resultat');
const elementMessage = document.getElementById('message');
const boutonRecommencer = document.getElementById('recommencer');
const imageCreature = document.getElementById('image-creature');
const fumee = document.getElementById("fumee");

// Récupération de la carte contenant le formulaire
const carteInvocation = formulaireInvocation.closest('.carte-invocation');

/**
 * Correspondance entre les Bijû et leurs images
 */
const imagesBijus = {
  "Shukaku, le Démon à Une Queue": "image/shukaku.webp",
  "Matatabi, le Démon à Deux Queues": "image/matatabi.png",
  "Isobu, le Démon à Trois Queues": "image/isobu.png",
  "Son Gokû, le Démon à Quatre Queues": "image/son-goku.webp",
  "Kokuô, le Démon à Cinq Queues": "image/kokuo.png",
  "Saiken, le Démon à Six Queues": "image/saiken.png",
  "Chômei, le Démon à Sept Queues": "image/chomei.png",
  "Gyûki, le Démon à Huit Queues": "image/gyuki.png",
  "Kurama, le Démon à Neuf Queues": "image/kurama.png"
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

  // AFFICHAGE DU RESULTAT

  // Déclenche la fumée d'invocation
  fumee.classList.add('active');
  console.log(fumee.className);
  // Attend que la fumée recouvre la carte
  setTimeout(() => {

    // Masque le formulaire et affiche le résultat
    carteInvocation.classList.add('cache');
    sectionResultat.classList.remove('cache');

    // Dissipe la fumée pour révéler le Bijû
    setTimeout(() => {
      fumee.classList.remove('active');
    }, 100);

  }, 700);
  setTimeout(() => {
    sectionResultat.classList.add('visible');
  }, 30);

});

/**
 * Réinitialisation de l'invocation
 */
boutonRecommencer.addEventListener('click', () => {

  // Réinitialise le formulaire
  formulaireInvocation.reset();

  // Masque le résultat
  sectionResultat.classList.remove('visible');
  sectionResultat.classList.add('cache');

  // Réaffiche le formulaire
  carteInvocation.classList.remove('cache');

  // Efface l'image précédente
  imageCreature.removeAttribute('src');

});
