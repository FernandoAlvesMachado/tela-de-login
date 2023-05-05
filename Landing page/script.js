function sobre(){
    window.location.href = "sobre.html";
}

function home(){
    let email = document.querySelector("#iptEmail")
    let senha = document.querySelector("#iptSenha")

    if(email == "fernando@gmail.com"){
        if (senha == 'senha123') {
            window.location.href = "index.html";
        }
    } else{
        alert("Senha incorreta!")
    }
    
}