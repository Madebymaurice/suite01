/*
  Entraînement String.prototype.split

  Ecrire une fonction "getTwoLastItems"
  qui permet de récupérer les 2 derniers éléments d'une chaine de caractère
  divisée en tableau par un pattern spécifique

  Prototype:
      arr getTwoLastItems(_str, _pattern);
*/

//  écrire votre code sous ce commentaire
const getTwoLastItems = (_str, _pattern) => {
   let result = _str.split(_pattern).slice(-2);
  return result;
}
/*
  Test 1
  Résultat attendu : ["Thursday", "Friday"]
*/

getTwoLastItems("Monday,Tuesday,Wednesday,Thursday,Friday", ",");

/*
  Test 2
  Résultat attendu : ["02", "2018"]
*/

getTwoLastItems("25/02/2018", "/");

/* DO NOT TOUCH */
module.exports = {
  getTwoLastItems: getTwoLastItems
}
