/*
  Ecrire une fonction "editArrayAt"
  qui prend en paramètre un tableau, une position et une valeur.
  La fonction modifie la valeur à la position du tableau demandée.

  Prototype:
      void editArrayAt(arr, position, value);
*/

//  écrire votre code sous ce commentaire
const editArrayAt = (_arr, _pos, _val) => {
  let startIndex = _pos;
  let change = _arr.splice(startIndex, 1, _val)
  return _arr;
}

/*
  Test 1
  Résultat attendu : ["bonjour", "ça", 5]
*/
var arr1 = ["bonjour", 4, 5];
editArrayAt(arr1, 1, "ça");

/*
  Test 2
  Résultat attendu : ["bonjour", "ça", "va?"]
*/
editArrayAt(arr1, 2, "va?");

/* DO NOT TOUCH */
module.exports = {
  editArrayAt: editArrayAt
}
