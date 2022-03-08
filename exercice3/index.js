var age = prompt("Veuillez saisir votre age.");
if (age >= 1 && age <= 17) {
  alert("Vous n'êtes pas encore majeur.");
} else if (age >= 18 && age <= 49) {
  alert("Vous êtes majeur mais pas encore senior.");
} else if (age >= 50 && age <= 59) {
  alert("Vous êtes senior mais pas encore retraité.");
} else if (age >= 60 && age <= 120) {
  alert("Vous êtes retraité, profitez de votre temps libre ! ");
} else {
  alert("Votre age semble Invraisemblable ");
}
