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

  const linkImg = document.createElement("a");
  linkImg.href = "./receita.html";

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
