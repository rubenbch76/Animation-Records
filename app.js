function getData (){
    var email = document.getElementById("email").value;
    console.log (email);
    localStorage.setItem("emailNames", email);
    let showMail = localStorage.setItem ("emailNames");
    console.log(showMail);
}