const projetos = document.getElementById("projetos")
// Função que consome a API do GitHub
async function buscarProjetos(){
    const response = await fetch("https://api.github.com/users/xLucasSA/repos")
    // Retorna Erro se houver falha no carregamento dos dados
    if(!response.ok){
        throw new Error(response.status, response.statusText)
    }
    // Converte os dados para formato json
    const conteudo = await response.json()
    // Adiciona cada elemento do json no padrão do html
    conteudo.forEach(element => {
        const { name, html_url, language, created_at, description } = element

        projetos.innerHTML += `
            <a href="${html_url}" target="_blank" rel="noopener noreferrer">
                <div class="projetos">
                    <h3>${name.toUpperCase()}</h3>
                    <p>${description}</p>
                    <p>${ Intl.DateTimeFormat("pt-BR").format(new Date(created_at)) }</p>
                    <p>${language||"Nenhuma associada"}</p>
                </div>
            </a>
        `
    });
}

buscarProjetos()