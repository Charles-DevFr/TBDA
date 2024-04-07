var tableau = []
var nombresaisie = 0
var somme = 0
var moyenne = 0
var saisie 

saisie = Number(window.prompt(" Entrez une valeur (0 pour terminer) :"));

    while (saisie !== 0)
    {
        tableau.push(saisie);
        nombresaisie ++ ;
        somme += saisie;
        moyenne = somme / nombresaisie;
        saisie = Number(window.prompt("Entrez une valeur (0 pour terminer) :"));
    }

console.log ("Nombre de valeurs saisies :" + nombresaisie);
console.log ("Somme des valeurs saisies :" + somme);
console.log ("Moyenne des valeurs saisies :" + moyenne);

alert ("Nombre de valeurs saisies :" + nombresaisie)
alert ("Somme des valeurs saisies :" + somme)
alert ("Moyenne des valeurs saisies :" + moyenne)