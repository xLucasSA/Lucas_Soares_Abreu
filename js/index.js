function calcularIdade(){
    let elemento = document.getElementById("idade")
    const hoje = new Date()
    const nascimento = new Date(1997,4,5)
    const diferenca = hoje.getTime() - nascimento.getTime()

    const idade = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25))

    elemento.innerHTML = idade
}

calcularIdade()