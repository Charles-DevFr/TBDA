var tableau=["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel"];
console.log(tableau)


function supprimerPrenom(prenom)
    {
        index = tableau.indexOf(prenom)
        
        if (index !== -1)
        {
            tableau.splice(index,1)
            console.log(tableau)
            console.log(" Prénom supprimé. ")
            alert(" Prénom supprimé. ")
        }
        else
            {
                console.log(" Prénom non trouvé. ")
                alert(" Prénom non trouvé. ")
            }
    }
    
    let prenom = prompt("Entrez un prénom")
    supprimerPrenom(prenom)