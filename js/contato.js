function enviarEmail() {
    const assunto = document.getElementById("assunto").value;
    let corpo = document.getElementById("corpo").value;
    
    corpo = corpo.replace("/\+/g", ' '); // Substituir '+' por espaço em branco

    const mailtoLink = "mailto:lsdeabreu@gmail.com" + "?subject=" + encodeURIComponent(assunto) + "&body=" + encodeURIComponent(corpo);

    window.location.href = mailtoLink;
}