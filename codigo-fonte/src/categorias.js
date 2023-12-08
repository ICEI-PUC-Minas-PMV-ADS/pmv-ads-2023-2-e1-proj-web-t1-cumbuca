const links = document.querySelectorAll(".link");

links.forEach((link) => {
  link.addEventListener("click", filtrarCategoria);
});

function filtrarCategoria(ev) {
  ev.preventDefault();
  const filtroAplicado = ev.currentTarget.textContent;
  const posts = JSON.parse(localStorage.getItem("posts"));
  const categoriasGrid = document.querySelector("#categoriasGrid");

  categoriasGrid.innerHTML = "";

  posts.forEach((element) => {
    if (element.categoria == filtroAplicado) {
      categoriasGrid.appendChild(criarPost(element));
    }
  });
}

const inputFiltroPorNome = document.querySelector(".pesquisa");
let textoDigitado = "";

inputFiltroPorNome.addEventListener("keyup", (ev) => {
  if (ev.key !== "Shift" && ev.key !== "Enter" && ev.key !== "Backspace") {
    textoDigitado = inputFiltroPorNome.value;
  } else if (ev.key === "Backspace") {
    textoDigitado = textoDigitado.slice(0, -1);
  }

  const posts = JSON.parse(localStorage.getItem("posts"));
  const categoriasGrid = document.querySelector("#categoriasGrid");

  if (inputFiltroPorNome.value === "") {
    atualizarReceitas();
    return;
  }
  categoriasGrid.innerHTML = "";

  posts.forEach((receita) => {
    if (receita.titulo.includes(textoDigitado)) {
      categoriasGrid.appendChild(criarPost(receita));
    }
  });
});

function atualizarReceitas() {
  const posts = JSON.parse(localStorage.getItem("posts")) || [];
  const categoriasGrid = document.querySelector("#categoriasGrid");

  posts.forEach((element) => {
    categoriasGrid.appendChild(criarPost(element));
  });
}

function criarPost(post) {
  const divPrin = document.createElement("div");
  divPrin.dataset.id = post.id;
  divPrin.classList.add("cards");

  const linkImg = document.createElement("p");

  const img = document.createElement("img");
  img.src = post.foto;
  img.classList.add("imgReceita");
  img.alt = "prato";

  const ratingDiv = document.createElement("div");
  ratingDiv.classList.add("rating");

  for (let i = 0; i < 5; i++) {
    const iconElement = document.createElement("iconify-icon");

    iconElement.setAttribute("icon", "mingcute:chicken-fill");
    iconElement.setAttribute("class", "icon");

    ratingDiv.appendChild(iconElement);
  }

  linkImg.appendChild(img);

  divPrin.append(linkImg, ratingDiv);

  return divPrin;
}

document.addEventListener("DOMContentLoaded", atualizarReceitas());

const cards = document.querySelectorAll(".cards");

cards.forEach((card) => {
  card.addEventListener("click", abrirReceita);
});

function abrirReceita(ev) {
  const receitaId = ev.currentTarget.dataset.id;
  const receitasLista = JSON.parse(localStorage.getItem("posts"));

  const receitaDetalhe = receitasLista.find((receita) => {
    if (receita.id === Number(receitaId)) {
      return receita;
    }
  });

  localStorage.setItem("receitaAtual", JSON.stringify(receitaDetalhe));

  location.href = "./receita.html";
}
