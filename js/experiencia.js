const clicado = document.querySelectorAll(".li");

function descricao(index) {
    const titulo = document.querySelector(".titulo");
    const data = document.querySelector(".data");
    const local = document.querySelector(".local");
    const desc = document.querySelector(".desc2");
    if (index == 0) {
        titulo.innerHTML = "Desenvolvedor Front-End";
        data.innerHTML = "jul de 2023 - nov de 2023";
        local.innerHTML = "Compass UOL - Estágio";
        desc.innerHTML =
            "Participei do programa de bolsas de estágio da Compass UOL onde tive uma trilha de estudos voltada para desenvolvimento front-end com React e AWS. Tive a vivência em ambiente de metodologia ágil ( Scrum ) construindo aplicações usando React com Redux, React Router e Styled-Components, fazendo o versionamento de código com Git e usando o GitHub para desenvolvimento de projetos em grupo, além de, treinamento para a certificação em AWS. ";
    } else if (index == 1) {
        titulo.innerHTML = "";
        data.innerHTML = "";
        local.innerHTML = "";
        desc.innerHTML = "";
    } else if (index == 2) {
        titulo.innerHTML = "";
        data.innerHTML = "";
        local.innerHTML = "";
        desc.innerHTML = "";
    } else {
        titulo.innerHTML = "";
        data.innerHTML = "";
        local.innerHTML = "";
        desc.innerHTML = "";
    }
}
for (let i = 0; i < clicado.length; i++) {
    clicado[i].addEventListener("click", () => {
        for (let j = 0; j < clicado.length; j++) {
            clicado[j].classList.remove("ativo");
        }
        clicado[i].classList.add("ativo");
        descricao(i);
    });
}