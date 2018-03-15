/*
    Ecrire une fonction "isEvenConcat",
    qui prend un paramètre un nombre,
    et qui retourne une chaine de caractère:
        - "<le nombre> est pair" si le nombre est pair
        - "<le nombre> est impair" si le nombre est impair

*/

//  écrire votre code sous ce commentaire
const isEvenConcat = (nb) => {
  if (nb%2 == 0) {
    return nb + ' est pair';
  }
  return nb + ' est impair';
}
/*
  Test 1
  Résultat attendu : "6 est pair"
*/

isEvenConcat(6);

/*
  Test 2
  Résultat attendu : "5 est impair"
*/

isEvenConcat(5);

/* DO NOT TOUCH */
module.exports = {
  isEvenConcat: isEvenConcat
}
