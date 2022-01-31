function enviarDados() {
    event.preventDefault();
    let nome = document.getElementById("nome").value;
    let senha = document.getElementById("senha").value;

    console.log(nome);
    console.log(senha);

    //fazer validação
    if (nome == null || senha == null) {
        window.alert('Erro ao fazer login\nTente novamente');
    }
    else {
        window.alert(`Sucesso ao fazer login\nBem vindo ${nome}`);
    }
}