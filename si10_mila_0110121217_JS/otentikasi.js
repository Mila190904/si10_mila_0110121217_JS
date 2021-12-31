function myFunction(){
    var un = document.forms["myForm"]["Uname"].value;
    var pw = document.forms["myForm"]["Pass"].value;
    if(un=="mila10si" && pw=="0110121217")
    {
        window.location.href="loginsukses.html";
    }
    else
    {
        alert("Username dan Password tidak valid");
    }
}