// Exercice 1

var A, B

B = prompt ("Entrez un nombre")
A = B%2
if (A==0)
{
    alert (B + "Le nombre est pair")
}
else
{
    alert (B + "Le nombre est impair")
}

//Exercice 2

var date, age

date = prompt ("Quel est votre année de naissance ?")
age = 2024 - date
if (age >= 18)
{
    alert ("Vous avez : " + age + " Vous étes majeur")
}
else 
{
    alert ("Vous avez : " + age + " Vous étes mineur")
}

//Exercice 3

var N1, N2, N3, calcul

N1 = prompt ("Entrez votre 1er chiffre")
N2 = prompt ("Entrez votre 2éme chiffre")
calcul = prompt ("Entrez votre opération")

switch (calcul)
{
    case "+" :
        N3 = +N1 + +N2;
        break;
    case "-" :
        N3 = N1 - N2;
        break
    case "*" :
        N3 = N1 * N2;
        break
    case "/" :
    if (N2==0)
      {  alert ("Opération érroné")
    }
    else    
        N3 = N1 / N2;
        break        
}
alert (N3)