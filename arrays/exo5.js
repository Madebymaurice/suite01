/*
  Ecrire une fonction "concatArrays"
  qui prend deux tableaux et qui renvoie un tableau constitué du contenu des deux tableaux.
  Prototype:
      arr concatArrays(arr1, arr2);

  Fonctions interdites:
      - Array.concat

  La fonction ne doit pas modifier les tableaux sources.
*/

//  écrire votre code sous ce commentaire
const concatArrays = (arr1, arr2) => {
  var array = arr1, arr2;
  array.push.apply(arr1, arr2);
  return array;
}
/*
  Test 1
  Résultat attendu : ["bonjour", "ça", "va?", 3, 4]
*/
concatArrays(["bonjour"], ["ça", "va?", 3, 4]);

/*
  Test 2
  Résultat attendu : ["enchanté", "je", "m'appelle", "comment?"]
*/
concatArrays(["enchanté", "je"], ["m'appelle", "comment?"]);

/* DO NOT TOUCH */
module.exports = {
  concatArrays: concatArrays
}
