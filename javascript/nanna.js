//video Forside
document.getElementById('vid').play();

//pensum
let test = ["hest","heste","hestene"];
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
        document.getElementById('errorname').innerHTML="Skriv dit navn";
        name.focus();
        return false;
    }else{
        document.getElementById('errorname').innerHTML="";
    }

    if (email.value == "")
    {
        document.getElementById('erroremail').innerHTML="Skriv en gyldig mail";
        email.focus();
        return false;
    }else{
        document.getElementById('erroremail').innerHTML="";
    }

    if (email.value.indexOf("@", 0) < 0)
    {
        document.getElementById('erroremail').innerHTML="Skriv en gyldig mail";
        email.focus();
        return false;
    }

    if (email.value.indexOf(".", 0) < 0)
    {
        document.getElementById('erroremail').innerHTML="Skriv en gyldig mail";
        email.focus();
        return false;
    }

    if (message.value == "")
    {
        document.getElementById('errormsg').innerHTML="Skriv en gyldig mail";
        message.focus();
        return false;
    }else{
        document.getElementById('errormsg').innerHTML="";
    }

    return true;
}
