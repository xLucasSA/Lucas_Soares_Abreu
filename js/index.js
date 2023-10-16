// Função que calcula quantidade de anos automaticamente
function calcularIdade(){
    let elemento = document.getElementById("idade")
    const hoje = new Date()
    const nascimento = new Date(1997,4,5)
    const diferenca = hoje.getTime() - nascimento.getTime()
    // Converte ms para anos e converte a difença em anos, arredondando para baixo
    const idade = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25))

    elemento.innerHTML = idade
}

calcularIdade()