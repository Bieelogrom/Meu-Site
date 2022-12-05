function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "Gabriel" && senha == "12345"){
      alert("sucesso");
      location.href = "Portal/PORTA.html";
     }else{
        alert("Usuário ou senha incorretos");
    }


}