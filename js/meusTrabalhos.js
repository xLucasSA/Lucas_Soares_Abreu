const projetos = document.getElementById("conteudo")

async function buscarProjetos(){
    const response = await fetch("https://api.github.com/users/xLucasSA/repos")
    if(!response.ok){
        throw new Error(response.status)
    }

    const conteudo = await response.json()
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