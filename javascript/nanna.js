//video Forside
document.getElementById('vid').play();

//pensum
let test = ["hest","hest","hest"];
//loop
for ( let i = 0; i < test.length; i++) {
  console.log(test[i]);
}

//kontaktside
function validateForm()
{
    var name = document.forms["myForm"]["name"];
    var email = document.forms["myForm"]["email"];
    var message = document.forms["myForm"]["message"];

    if (name.value == "")
    {
        document.getElementById('errorname').innerHTML="Skriv en gyldig email";
        name.focus();
        return false;
    }else{
        document.getElementById('errorname').innerHTML="";
    }
    return true;
}
