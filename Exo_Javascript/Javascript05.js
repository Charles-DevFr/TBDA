// Exercice 1

x = prompt ("Entrez un chiffre");
y = prompt ("Entrez un autre chiffre")

function produit (x , y) {
    let resultat = x * y;
    document.getElementById("produit").innerHTML = " Le produit de " +x+ " x " +y+ " est égal à " +resultat
    return resultat;
}
function carre (x) {
    let resultatcube = x * x * x;
    document.getElementById("produitcube").innerHTML = " Le cube de " +x+ " est égal à " +resultatcube
    return resultatcube;
}


resultat = produit(x , y)
console.log (resultat);
resultatcube = carre(x , x)
console.log (resultatcube);

function afficheImage (image) {
    const imgElement = document.getElementById("img");
    imgElement.src = "media/minion.jpg";
}
afficheImage ()

//Exercice 2

/*var str1 = "robert ;dupont ;amiens ;80000" 

function A (str1, str2, n) {
    
    const mots = str1.split(str2);
       
            const mot = mots[n - 1];
            return mot;
    }
        console.log (A(str1, ";", 1));*/
