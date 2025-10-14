const botaocontratar = document.querySelectorAll(".btn-contratar");

botaocontratar.forEach(function(botao) {
    botao.addEventListener("click", function(event) {
        window.location = "../pagina-planos/planos.html";
    })
})