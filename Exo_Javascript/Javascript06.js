//Exercice 1

var taille = parseInt(prompt("Entrez la taille de votre tableau"));

    if (isNaN(taille) || taille <= 0) 
    {
        alert ("Entrez un nombre pour la taille du tableau. ");
    }
    else
    {
        var tableau = [];
            
            for (var i = 0; i < taille; i++)
            {
                var valeur = parseInt(prompt("Entrez une valeur " + (i + 1) + " : "));
                    if (isNaN(valeur))
                    {
                        alert("Entrez un nombre valide. ");
                        i--;
                    }
                    else {
                        tableau.push(valeur);
                    }
            }
            console.log ("Le tableau créé est :" , tableau);
    }
