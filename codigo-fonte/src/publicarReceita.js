const addNewBtn = document.querySelector("#addNew");
const cancelBtn = document.querySelector("#cancelBtn");
const divPub = document.querySelector(".publicaReceita");
const postBtn = document.querySelector("#postBtn");
const ingredientes = document.querySelector("#ingredientes");
const addItemIng = document.querySelector("#addItemIng");

divPub.style.display = "none";
divPub.style.position = "unset";

ingredientes.value = "";

addNewBtn.addEventListener("click", () => {
  divPub.style.display = "flex";
  divPub.style.position = "absolute";

  const titulo = document.querySelector("#receitaTitle");
  const fotoReceita = document.querySelector("#addImg");
  const resumo = document.querySelector("#resume");
  const preparo = document.querySelector("#preparo");
  const ingredientes = document.querySelector("#ingredientes");
  const categoria = document.querySelector("#categoria");

  titulo.value = "";
  fotoReceita.value = "";
  resumo.value = "";
  preparo.value = "";
  ingredientes.value = "";
  categoria.value = "default";
});

ingredientes.addEventListener("keydown", (ev) => {
  if (ev.key === "Enter") {
    ev.preventDefault();
    adicionarItem();
  }
});

function adicionarItem() {
  const item = ingredientes.value;

  if (item === "") {
    alert("Deve ser preenchido um item");
    ingredientes.focus();
    return;
  }

  if (item.length < 2) {
    alert("Deve conter pelo menos duas letras");
    ingredientes.focus();
    return;
  }

  const listaInp = document.querySelector("#listaInp");

  const newItem = document.createElement("li");
  newItem.innerText = item;
  newItem.classList.add("itemIngrediente");

  listaInp.appendChild(newItem);

  ingredientes.value = "";
}

addItemIng.addEventListener("click", adicionarItem);

cancelBtn.addEventListener("click", () => {
  const divPub = document.querySelector(".publicaReceita");
  const titulo = document.querySelector("#receitaTitle");
  const fotoReceita = document.querySelector("#addImg");
  const resumo = document.querySelector("#resume");
  const preparo = document.querySelector("#preparo");
  const ingredientes = document.querySelector("#ingredientes");
  const listaInp = document.querySelector("#listaInp");
  const categoria = document.querySelector("#categoria");

  const confirmacao = confirm(
    "Tem certeza que deseja cancelar? Os dados serão perdidos"
  );

  if (!confirmacao) {
    return;
  }

  titulo.value = "";
  fotoReceita.value = "";
  resumo.value = "";
  preparo.value = "";
  ingredientes.value = "";
  categoria.value = "default";

  while (listaInp.firstChild) {
    listaInp.removeChild(listaInp.firstChild);
  }

  divPub.style.display = "none";
  divPub.style.position = "unset";
});

postBtn.addEventListener("click", () => {
  const titulo = document.querySelector("#receitaTitle");
  const fotoReceita = document.querySelector("#addImg");
  const resumo = document.querySelector("#resume");
  const preparo = document.querySelector("#preparo");
  const listaInp = document.querySelector("#listaInp");
  const categoria = document.querySelector("#categoria");
  const itemIngrediente = document.querySelectorAll(".itemIngrediente");

  if (
    titulo.value === "" ||
    resumo.value === "" ||
    preparo.value === "" ||
    categoria.value === "default" ||
    !listaInp.firstChild
  ) {
    alert("Todos os campos devem ser preenchidos");
    return;
  }

  const currentUser = JSON.parse(localStorage.getItem("userLogado"));

  // Verifica se uma imagem foi selecionada
  if (!fotoReceita.files || !fotoReceita.files[0]) {
    alert("Por favor, selecione uma imagem");
    return;
  }

  const leitor = new FileReader();

  leitor.onload = function (e) {
    const ingredientes = [];

    itemIngrediente.forEach((element) => {
      ingredientes.push(element.innerText);
      console.log(element.innerText);
    });

    const id = JSON.parse(localStorage.getItem("lastID")) || 9;
    localStorage.setItem("lastID", JSON.stringify(id + 1));

    const novoPost = {
      id: id + 1,
      titulo: titulo.value,
      foto: e.target.result, // Usa o resultado da leitura da imagem
      resumo: resumo.value,
      preparo: preparo.value,
      listaInp: ingredientes,
      categoria: categoria.value,
      usuario: currentUser,
    };

    const posts = JSON.parse(localStorage.getItem("posts")) || [];

    posts.push(novoPost);

    localStorage.setItem("posts", JSON.stringify(posts));

    console.log(posts);

    divPub.style.display = "none";
    divPub.style.position = "unset";

    atualizarReceitas();

    alert("Receita adicionada com sucesso");
  };

  leitor.readAsDataURL(fotoReceita.files[0]);
});

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

function atualizarReceitas() {
  const posts = JSON.parse(localStorage.getItem("posts")) || [];
  const receitasUserPerfil = document.querySelector(".receitasUserPerfil");
  const currentUser = JSON.parse(localStorage.getItem("userLogado"));

  posts.forEach((element) => {
    if (element.usuario === currentUser) {
      receitasUserPerfil.appendChild(criarPost(element));
    }
  });
}

document.addEventListener("DOMContentLoaded", atualizarReceitas());
