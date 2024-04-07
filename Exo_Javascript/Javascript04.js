//Exercice 1

/*var nom
var A = []

    while (true) 
        {
          nom = prompt ("Entrez votre prénom");
        if (nom =="") 
        {
            break;
         }
        A.push(nom);
        }
console.log (A)
alert ("Nombes d'essai : " + A)
alert ("Nombre de nom saisie : " + A.length)

//Exercice 2

var N = []
var chiffre 

      chiffre = prompt ("Entrez un nombre")
      while (chiffre >= 0, chiffre--)
      {
       N.push(chiffre)
      }
    console.log (N)
      alert ("Les nombres inferieur a :" + N)

//Exercice 3

var nombre = []
var somme, moyenne
somme=0

       for (var i = 0; i < 1000; i++){
          nombre[i] = prompt ("Entrez un nombre entier (0 pour quitter) :")
           if (nombre[i] == 0)
          {
            break
          }
          somme= +somme + +nombre[i]
         }
        moyenne= +somme / (nombre.length)
         console.log(nombre)

    alert ("La somme des nombres est : " +somme)
    alert ("La moyenne des nombres est :" + moyenne)

//Exercice 4


function calculerMultiples(n, x) {

  const multiples = []

for (let i = 1; i <= n; i++) 
  {
    const multiple = i * x;
    multiples.push(multiple);
  }
  console.log ("Les premiers multiples de " +x, "sont :");
  console.log = total = (multiples.join(" - "));
}

const n = parseInt (prompt( "Entrez le nombre N : "));
const x = parseInt (prompt( "Entrez le nombre X : "));

calculerMultiples(n, x);

alert (" Les " +n+ " premiers muiltiples de " +x+ " sont : " +total)*/

//Exercice 5

function compterVoyelles(mot) {
  
  const voyelles = ["a","e","i","o","u","y","A","E","I","O","U","Y"]
    let nbVoyelles = 0;

    for (let i = 0; i < mot.lenght; i++) {
      const caractere = mot.substring(i, i + 1);
        if (voyelles.indexOf(caractere) !== -1) {
         nbVoyelles++; 
        }
      }
        return nbVoyelles;
    }

    const motSaisi = prompt ("Saisissez un mot : ");
    const nombreVoyelles = compterVoyelles(motSaisi);

    console.log("Le mot " +motSaisi+ " contient " +nombreVoyelles+ " voyelles. ");

    alert (" Le mot " +motSaisi+ " contient " +nombreVoyelles+ " voyelles. ")