const icons = document.querySelectorAll(".habilidade i");
const descricao = document.getElementById("descricao");
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll("header a");

const progressBar = document.getElementById("progress-bar");
const textoPadrao = descricao.textContent;

icons.forEach(icon => {
  ["mouseenter", "click"].forEach(evento => {
    icon.addEventListener(evento, () => {
     icon.classList.add("ativo");
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
      if(icon.classList.contains("fa-network-wired")){
        descricao.textContent = "Fundamentos de infraestrutura e redes de computadores";
      }
    });
    icon.addEventListener("mouseleave", () => {
    icon.classList.remove("ativo");
  });
    
  });

});


window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;
  progressBar.style.width = progress + "%";
});


window.addEventListener("scroll", () => {
  let posicaoAtual = window.scrollY + 150;

  sections.forEach(section => {
    const topo = section.offsetTop;
    const altura = section.offsetHeight;
    const id = section.getAttribute("id");

    if (posicaoAtual >= topo && posicaoAtual < topo + altura) {
      links.forEach(link => link.classList.remove("ativo"));

      const linkAtivo = document.querySelector(`header a[href="#${id}"]`);
      if (linkAtivo) linkAtivo.classList.add("ativo");
    }
  });
});


