/**
 * Récupération des éléments du DOM nécessaires à l'interaction
 */
const formulaireInvocation = document.getElementById('invocation');
const sectionResultat = document.getElementById('resultat');
const elementMessage = document.getElementById('message');
const boutonRecommencer = document.getElementById('recommencer');
const carteInvocation = formulaireInvocation.closest('.carte-invocation');
/**
 * Écoute de l'événement de soumission du formulaire d'invocation.
 * Empêche le rechargement de la page, récupère les valeurs saisies,
 * met à jour le message et bascule l'affichage entre le formulaire et le résultat.
 */
formulaireInvocation.addEventListener('submit', (event) => {
  // Bloque le comportement par défaut du formulaire (rechargement de page)
  event.preventDefault();

  // Récupération des données du formulaire
  const prenom = document.getElementById('prenom').value;
  const creature = document.getElementById('creature').value;

  // Injection dynamique du message personnalisé
  elementMessage.textContent = `Shinobi ${prenom}, ${creature} a accepté de lier son chakra au tien pour tout le Bloc 1 !`;

  // Basculement de visibilité : cache le formulaire et affiche le résultat
  carteInvocation.classList.add('cache');
  sectionResultat.classList.remove('cache');
});

/**
 * Écoute du clic sur le bouton de réinitialisation.
 * Réinitialise les champs du formulaire et inverse l'affichage pour recommencer.
 */
boutonRecommencer.addEventListener('click', () => {
  formulaireInvocation.reset();
  sectionResultat.classList.add('cache');
  carteInvocation.classList.remove('cache');
});