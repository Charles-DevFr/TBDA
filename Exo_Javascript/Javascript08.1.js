var random = Math.floor(Math.random()*100)
console.log(random)
function verif()
{
    var text = document.getElementById("textbox").value
        if (text < random)
        {
            alert (" Trop petit !! ")
        }
            else 
            {
                alert (" Trop grand !! ")
            }
    }

