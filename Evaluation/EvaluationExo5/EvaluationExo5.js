document.addEventListener('DOMContentLoaded', function () {
    const formulaire = document.getElementById("formulaire");

    formulaire.addEventListener('submit', function (e) {
    {

        e.preventDefault();

    filtrealpha = new RegExp(/^[A-Za-z]+$/)
    filtrenum = new RegExp(/^([0-9]{5})+$/)
    filtremail = new RegExp(/^[a-z0-9.-]+@[a-z0-9.-]+.[a-z0-9]+$/)
    filtredate = new RegExp(/^[0-9]+-[0-9]+-[0-9]+$/)
    var valide = true
    var nom = document.getElementById("nom").value
    var prenom = document.getElementById("prenom").value
    var femme = document.getElementById("femme").value
    var homme = document.getElementById("homme").value
    var date = document.getElementById("date").value
    var codepostal = document.getElementById("codepostal").value
    var email = document.getElementById("email").value
    var sujet = document.getElementById("sujet").value
    var question = document.getElementById("question").value
    var accepte = document.getElementById("accepte").value

        resultat = filtrealpha.test(nom)
           if (resultat == false)
            {
                valide = false
                alert (" Entrez votre nom. ")
            }
        
        resultat = filtrealpha.test(prenom)
            if (resultat == false)
            {
                valide = false
                alert (" Entrez votre prénom. ")
            }
        
            if (femme.checked == false && homme.checked == false)
            {
                valide = false
                alert (" Choisissez un sexe. ")
            }

        resultat = filtredate.test(date)
            if (resultat == false)
            {
                valide = false
                alert (" Entrez une date de naissance. ")
            }
            
        resultat = filtrenum.test(codepostal)
            if (resultat == false)
            {
                valide = false
                alert (" Entrez un code postal valide. ")
            }

        resultat = filtremail.test(email)
            if (resultat == false)
            {
                valide = false
                alert (" Entrez un email valide. ")
            }

        resultat = filtrealpha.test(sujet)
            if (resultat == false)
            {
                valide = false
                alert (" Selectionnez un sujet. ")
            }

        resultat = filtrealpha.test(question)
           if (resultat == false)
            {
                valide = false
                alert (" Ecrivez votre question. ")
            }

        resultat = filtrealpha.test(accepte)
           if (resultat == false)
            {
                valide = false
                alert (" Veuillez accepter le traitement de ce formulaire. ")
            }
    
            if (valide) 
            {
                console.log("Formulaire valide, prêt à être soumis.");
                formulaire.submit();
            }
        }
    })
})
    
    const choisi = document.getElementById("remove")
    const choixElement = document.getElementById("sujet")
    choixElement.addEventListener("change", () => 
        {
            choisi.remove()
        }
    )