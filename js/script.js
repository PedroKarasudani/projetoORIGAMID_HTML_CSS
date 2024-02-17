//ativar link menu

const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = window.location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// ativar itens orcamento

const url = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

url.forEach(ativarProduto);

// Perguntas Frequentes

const perguntas = document.querySelectorAll(".perguntas dt button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativo");
  const ativa = resposta.classList.contains("ativo");
  pergunta.setAttribute("aria-expanded", ativa);

  console.log(controls);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);
