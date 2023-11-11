function verificarsenha() {

    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if (usuario != localStorage.getItem("usuario") || senha != localStorage.getItem("senha")) {
        document.getElementById("resposta-senha").innerHTML = "Usuário ou senha inválidos!";
        return;
    }
    window.location.href = "index.html";
}
function versenha(op){
    
    if (op == 'senha-login') {
        var senha_login = document.getElementById("senha")
        var img = document.getElementById("img_senha");
        if (senha_login.type == "text") {
            img.src = "img/versenha.png";
            senha_login.type = "password";
        } 
        else {
            senha_login.type = "text";
            img.src = "img/bloquear_senha.png";
        }
    }
    if (op == 'senha-cadastro1') {
        var img1 = document.getElementById("img_senha1");
        var senha_cadastro = document.getElementById("senha1")
        if (senha_cadastro.type == "text") {

            img1.src = "img/versenha.png";
            senha_cadastro.type = "password";
        } 
        else {
            senha_cadastro.type = "text";
            img1.src = "img/bloquear_senha.png";
        }
    }
    if (op == 'senha-cadastro2') {
        var senha_cadastro = document.getElementById("senha2")
        var img2 = document.getElementById("img_senha2");
        if (senha_cadastro.type == "text") {
            img2.src = "img/versenha.png";
            senha_cadastro.type = "password";
        } 
        else {
            senha_cadastro.type = "text";
            img2.src = "img/bloquear_senha.png";
        }
    }
}

function cadastrarusuario(op) {

    if (op == 'abrir_tela'){
        document.querySelector(".login").style.display = "none";
        document.querySelector(".tela_cadastro").style.display = "block";
    }
    if (op == 'fechar_tela'){
        document.querySelector(".login").style.display = "block";
        document.querySelector(".tela_cadastro").style.display = "none";
    }
    if (op == 'confirmar_login') {

        var maiuscula = false;
        var minuscula = false;
        var numero = false;
        var caracter = false;

        const resultado_cadastro = document.getElementById("resultado_cadastro");

        var usuario = document.getElementById("usuario1").value;
        var senha1 = document.getElementById("senha1").value;
        var senha2 = document.getElementById("senha2").value;

        if (usuario == "" || senha1 == "" || senha2 == "") {
            resultado_cadastro.innerHTML = "Preencha todos os campos!";
            return;
        }
        if (senha1 != senha2) {
            resultado_cadastro.innerHTML = "Senhas não conferem!";
            return;
        }
        if (senha1.length < 6) {
            resultado_cadastro.innerHTML = "Senha deve conter no mínimo 6 caracteres!";
            return;
        }
        for (var i = 0; i < senha1.length; i++) {
            if (senha1[i] >= 'A' && senha1[i] <= 'Z') {
                maiuscula = true;
            } else if (senha1[i] >= 'a' && senha1[i] <= 'z') {
                minuscula = true;
            } else if (senha1[i] >= '0' && senha1[i] <= '9') {
                numero = true;
            } else {
                caracter = true;
            }
        }

        if (maiuscula && minuscula && numero && caracter) {
            localStorage.setItem("usuario", usuario);
            localStorage.setItem("senha", senha1);
    
            alert("Usuário cadastrado com sucesso!");
    
            document.querySelector(".login").style.display = "block";
            document.querySelector(".tela_cadastro").style.display = "none";
        }
        else {
            resultado_cadastro.innerHTML = "Senha deve conter no mínimo 1 letra maiúscula, 1 letra minúscula, 1 número e 1 caracter especial!";
        }
    }
}

