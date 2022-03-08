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

function plusPetitEtGrandTableau(tab) {
  mini = Math.min.apply(Math, tab);
  maxi = Math.max.apply(Math, tab);
  console.log(
    "Le plus petit élément du tableau est " +
      mini +
      " Le plus grand élément du tableau est " +
      maxi
  );
}

function moyenneTableau(tab) {
  var compteur = 0;
  for (var i = 0; i < tab.length; i++) {
    compteur += parseInt(tab[i], 10);
  }
  console.log("la moyenne du tableau est " + compteur / tab.length);
  return compteur / tab.length;
}

function checkPinCode(code) {
  var nbChiffre = parseInt(Math.floor(Math.log10(Math.abs(code))) + 1);
  console.log(nbChiffre);
  if (nbChiffre == 4 || nbChiffre == 6) {
    console.log("Ce code est valide");
  } else {
    console.log("Ce code n'est pas valide");
  }
}

function toLowerThanToUpper(chaine) {
  console.log(
    "La chaine en minuscul est " +
      chaine.toLowerCase() +
      " La chaine en majuscul est " +
      chaine.toUpperCase()
  );
}

var monTab = ["1", "1", "100", "5"];
plusPetitEtGrandTableau(monTab);
moyenneTableau(monTab);
var codeTest = 412230;
checkPinCode(codeTest);
var chaineTest = "Ma chaine test";
toLowerThanToUpper(chaineTest);
