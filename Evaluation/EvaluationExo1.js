var nbJeunes = 0
var nbAdultes = 0
var nbVieux = 0
var age = 0

while (age!==100)
{
    age = parseInt(prompt("Entrez votre âge :"))
        
    if (age < 20) 
    {
        nbJeunes++;
    }
    else if (age >= 20 && age <= 60)
    {
        nbAdultes++;
    }
    else if (age >= 60 && age <= 100)
    {
        nbVieux++;
    }
    
}
    
console.log("Nombre de personnes de moins de 20 ans : " + nbJeunes);
console.log("Nombre de personnes entre 20 et 40 ans : " + nbAdultes);
console.log("Nombre de personnes de plus de 40 ans : " + nbVieux);
    alert (" Le nombre de jeune : " +nbJeunes + " Le nombre d'adulte : " +nbAdultes + " Le nombre de vieux : " +nbVieux)