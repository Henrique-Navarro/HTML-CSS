function enviarDados() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let telefone = document.getElementById("telefone").value;
    let select = document.getElementById("assunto");
    let assunto = select.option[select.selectedIndex].value;
    let texto = document.getElementById("mensagem").value;

    //banco de dados artificial
    const nomes = ['Henrique', 'Joao', 'Mariana', 'Julia', 'Gustavo', 'Jaqueline'];
}

function mostrar() {
    document.getElementById("mostrarDados").innerHTML = `Seu nome: ${nome}\nSeu email: ${email}\nSua senha: ${senha}\nSeu telefone: ${telefone}\n`
}