const icons = document.querySelectorAll(".habilidade i");
const descricao = document.getElementById("descricao");

const textoPadrao = descricao.textContent;

icons.forEach(icon => {
  ["mouseenter", "click"].forEach(evento => {
    icon.addEventListener(evento, () => {
      if (icon.classList.contains("fa-database")) {
        descricao.textContent = "Modelagem e consultas em banco de dados SQL";
      }
      if (icon.classList.contains("fa-git-alt")) {
        descricao.textContent = "Versionamento de código com Git";
      }
      if (icon.classList.contains("fa-php")) {
        descricao.textContent = "Desenvolvimento back-end com PHP";
      }
      if (icon.classList.contains("fa-js")) {
        descricao.textContent = "Interatividade e lógica com JavaScript";
      }
      if (icon.classList.contains("fa-github")) {
        descricao.textContent = "Hospedagem e colaboração em projetos no GitHub";
      }
    });
  });

});
