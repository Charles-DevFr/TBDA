var PU
var QTECOM
var PAP
var REM
var PORT 

PU = prompt (" Entrez le prix unitaire : ")
QTECOM = prompt (" Entrez la quantitée d'article :")

TOT = (PU * QTECOM)

    if (TOT >= 100 && TOT <= 200)
        {
            REM = TOT * 0.05
        }
        else if (TOT > 200)
            {
                REM = TOT * 0.10
            }
            else
                {
                    REM = 0
                }
TOTREM = TOT - REM
PORT = TOTREM * 0.02

    if(TOTREM > 500)
        {
            PORT = 0
        }
        else if (PORT < 6)
            {
                PORT = 6
            }

PAP = TOTREM + PORT

console.log("Prix avant remise et frais de port =" +TOT)
console.log("Reduction =" +REM)
console.log("Frais de port =" +PORT)
console.log("Total =" +PAP)