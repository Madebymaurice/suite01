/*
    Ecrire une fonction "shoppingList",
    qui prend un paramètre un tableau de paniers;

    Un panier est un tableau de mots;

    La fonction retourne un objet contenant:
        - comme clef le nom du produit rencontré
        - comme valeur le nombre de fois qu'il à été rencontré

    Important -> l'ordre n'a aucune importance
*/

//  écrire votre code sous ce commentaire

const shoppingList = (array) => {
    let obj = {};
    // let myNewArray = [].concat.apply([], array);
    // myNewArray.sort();
    // console.log(myNewArray);
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {
            let fruit = array[i][j];
                if (obj[fruit] === undefined) {
                    obj[fruit] = 1;
                } else {
                    obj[fruit] = obj[fruit] + 1;
                }
       
        }
    }
    return obj;
}

/*
  Test 1
  Résultat attendu : {
    "orange": 8,
    "kiwi": 4,
    "ananas": 3,
    "prune": 2,
    "banane": 2,
    "pamplemousse": 1
  }
*/

shoppingList([
    ["orange", "orange", "kiwi", "ananas"],
    ["kiwi", "ananas", "banane", "prune"],
    ["orange", "orange", "orange", "orange"],
    ["orange", "orange", "kiwi", "kiwi"],
    ["prune", "banane", "pamplemousse", "ananas"]
]);

/* DO NOT TOUCH */
module.exports = {
  shoppingList: shoppingList
}
