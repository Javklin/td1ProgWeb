function nombreVoyelles(mot) {
  var compteurVoyelles = 0;
  var compteurConsonnes = 0;
  var motToString = mot.toString();
  // on parcours la chaine de caractère qui correspond au mot
  for (var i = 0; i < motToString.length; i++) {
    if (
      motToString.charAt(i) == "o" ||
      motToString.charAt(i) == "i" ||
      motToString.charAt(i) == "y" ||
      motToString.charAt(i) == "a" ||
      motToString.charAt(i) == "u"
    ) {
      compteurVoyelles += 1;
    } else {
      compteurConsonnes += 1;
    }
  }
  // on affiche le nombre de consonnes et voyelles
  console.log(
    "il y a " +
      compteurVoyelles +
      " voyelles et " +
      compteurConsonnes +
      " consonnes"
  );
  return compteurVoyelles;
}

nombreVoyelles("Franklin");

function nombreVoyellesRegex(mot) {
  var compteurVoyelles = 0;
  var compteurConsonnes = 0;
  var motToString = mot.toString();
  // on récupère le nombre de voyelles dans le mot
  compteurVoyelles = motToString.match(/[aeiyou]/gi).length;
  compteurConsonnes = motToString.length - compteurVoyelles;
  console.log(
    "il y a " +
      compteurVoyelles +
      " voyelles et " +
      compteurConsonnes +
      " consonnes"
  );
  return compteurVoyelles;
}

nombreVoyellesRegex("Franklin");

function plusPetitTableau(tab) {
  return Math.min(tab);
}
function plusGrandTableau(tab) {
  return Math.max(tab);
}

function moyenneTableau(tab) {
  var compteur = 0;
  for (var i = 0; i < tab.length; i++) {
    compteur += tab[i];
  }
  return compteur / tab.length;
}

function checkPinCode(tab) {}

function toLowerThanToUpper(tab) {}
