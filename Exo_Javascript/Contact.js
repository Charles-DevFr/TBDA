function verifier()
    {
    filtrealpha = new RegExp(/^[A-Za-z]+$/)
    filtrenum = new RegExp(/^([0-9]{5})+$/)
    filtremail = new RegExp(/^[a-z0-9.-]+@[a-z0-9.-]+.[a-z0-9]+$/)
    var soci = document.getElementById("societe").value 
    var perso = document.getElementById("personne").value
    var codepost = document.getElementById("codepostal").value
    var ville = document.getElementById("ville").value
    var mail = document.getElementById("email").value

        resultat = filtrealpha.test(soci)
           if (resultat == false)
            {
                alert ("Entrez un nom de société")
            }
        
        resultat = filtrealpha.test(perso)
            if (resultat == false)
            {
                alert ("Entrez un nom de personne à contacter")
            }
        
        resultat = filtrenum.test(codepost)
            if (resultat == false)
            {
                alert ("Entrez un code postale valide")
            }
            
        resultat = filtrealpha.test (ville)
            if (resultat == false)
            {
                alert ("Entrez une ville")
            }
        
        resultat = filtremail.test (mail)
            if (resultat == false)
            {
                alert ("Entrez une adresse mail")
            }
    }

    const choisi = document.getElementById("remove")
    const choixElement = document.getElementById("menu")
    choixElement.addEventListener("change", () => 
        {
            choisi.remove()
        }
    )