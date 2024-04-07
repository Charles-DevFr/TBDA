function tableMultiplication()
    {
        N = prompt("Entrez un nombre")
        var resultat = 0
        for(var i = 0; i <= 10; i++)
        {
            resultat = i * N
            console.log (i+ "x" +N+ "=" +resultat)
        }
    }
tableMultiplication()