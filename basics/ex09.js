/*
    Ecrire une fonction "boostedEvenAddition",
    qui prend un paramètre un tableau de nombre,
    et qui retourne un nombre étant l'addition de tous les nombres PAIRS du tableau

*/

//  écrire votre code sous ce commentaire
const isEven = (nb) => {
  if (nb%2 == 0) {
    return 1;
  }
  return 0;
}

const boostedEvenAddition = (array) => {
	let totalPair = 0;

	for (let i = array.length - 1; i >= 0; i--) {
		let nb = array[i];
		let test = isEven(nb);

		if (test == 1) {
		  totalPair = totalPair + nb;
		}
	}
	return totalPair;
}
/*
  Test 1
  Résultat attendu : 10
*/

boostedEvenAddition([4, 5, 6]);

/*
  Test 2
  Résultat attendu : 44
*/

boostedEvenAddition([1, 3, 4, 5, 4, 6, 9, 8, 11, 10, 11, 12]);

/* DO NOT TOUCH */
module.exports = {
  boostedEvenAddition: boostedEvenAddition
}
