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

    const id = JSON.parse(localStorage.getItem("lastID")) || 10;
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

  if (posts.length === 0) {
    //Receitas pré definidas

    const carnePost = {
      id: 0,
      titulo: "Carne assada com batata",
      foto: "./assets/perfil/carneAssadaComBatata.jpg",
      resumo: "Deliciosa carne assada com batata",
      preparo:
        "Fure a carne com a ponta da faca e no meio para colocar a linguiça calabresa, deixe marinar no vinagre, alho, cominho, amaciante de carne e sal grosso por pelo menos 30 minutos.",
      listaInp: [
        "Lagarto Redondo",
        "Alho a gosto",
        "Sal",
        "1kg linguica",
        "3 batatas",
      ],
      categoria: "carnes",
      usuario: "admin@gmail.com",
    };

    posts.push(carnePost);

    const avePost = {
      id: 1,
      titulo: "Peru com molho agridoce",
      foto: "./assets/perfil/peru.jpg",
      resumo: "Peru com molho agridoce",
      preparo:
        "Peru com molho agridoce, com licor Curaçau e frutas cítricas, que a Ana Maria preparou no programa para sua ceia de Natal. Confira!",
      listaInp: [
        "4 colheres de acucar",
        "1 xicara de vinagre",
        "Suco de 2 laranjas",
        "Suco de 1 limao",
        "Sal",
        "1 colher de manteiga",
      ],
      categoria: "aves",
      usuario: "admin@gmail.com",
    };

    posts.push(avePost);

    const peixesFrutos = {
      id: 2,
      titulo: "Bacalhau enformado em batata",
      foto: "./assets/perfil/bacalhau.jpg",
      resumo:
        "Receita de bacalhau enformado em batata laminada, feito na panela, para você servir em datas especiais e surpreender. Veja que fácil a delícia agora mesmo!",
      preparo:
        "1- Aqueça o azeite e refogue o alho. 2- Adicione o bacalhau e refogue até secar (uns 10 minutos). 3- Acrescente a cebola e os pimentões, tempere com sal e salsa a gosto e refogue levemente (1 minuto). Reserve.",
      listaInp: [
        "1 colher de azeite",
        "sopa de alho",
        "1 cebola fatiada",
        "1 pimentao",
        "Sal e salsa",
      ],
      categoria: "peixesFrutosDoMar",
      usuario: "admin@gmail.com",
    };

    posts.push(peixesFrutos);

    const saladasMolhos = {
      id: 3,
      titulo: "Salada de brócolis",
      foto: "./assets/perfil/salada.jpg",
      resumo: "Salada de brócolis",
      preparo:
        "Como toda salada, esta também é super prática fácil de fazer. E a única preocupação que precisamos ter, é deixar o brócolis bem verdinho e crocante. Então, nada de refogar ou cozinhar direto na água. A melhor forma para consumir o brócolis em forma de salada, é cozido rapidamente no vapor, cru ou branqueado, como minha mãe diz, “assustado”.",
      listaInp: [
        "1 xicara de brocolis",
        "1 cebola roxa",
        "1 maçã picada",
        "1 cenoura",
        "1 xicara de parmesao",
      ],
      categoria: "saladasMolhos",
      usuario: "admin@gmail.com",
    };

    posts.push(saladasMolhos);

    const bebidas = {
      id: 4,
      titulo: "Caipirinha de limão",
      foto: "./assets/perfil/caipirinha.jpg",
      resumo: "Deliciosa Caipirinha de limão",
      preparo:
        "Pegar o limao, cortar ao meio, expremer em um recepiente ate sair todo o caldo e adicionar acuar e cachaça ",
      listaInp: ["limão", "açucar", "cachaça"],
      categoria: "bebidas",
      usuario: "admin@gmail.com",
    };

    posts.push(bebidas);

    const docesSobremesas = {
      id: 5,
      titulo: "",
      foto: "./assets/perfil/peru.jpg",
      resumo: "",
      preparo: "",
      listaInp: [],
      categoria: "peixesFrutosDoMar",
      usuario: "admin@gmail.com",
    };

    posts.push(docesSobremesas);

    const massas = {
      id: 6,
      titulo: "",
      foto: "./assets/perfil/peru.jpg",
      resumo: "",
      preparo: "",
      listaInp: [],
      categoria: "peixesFrutosDoMar",
      usuario: "admin@gmail.com",
    };

    posts.push(massas);

    const lanches = {
      id: 7,
      titulo: "",
      foto: "./assets/perfil/peru.jpg",
      resumo: "",
      preparo: "",
      listaInp: [],
      categoria: "peixesFrutosDoMar",
      usuario: "admin@gmail.com",
    };

    posts.push(lanches);

    const alimentacaoSaudavel = {
      id: 8,
      titulo: "",
      foto: "./assets/perfil/peru.jpg",
      resumo: "",
      preparo: "",
      listaInp: [],
      categoria: "peixesFrutosDoMar",
      usuario: "admin@gmail.com",
    };

    posts.push(alimentacaoSaudavel);

    const bolosTortas = {
      id: 9,
      titulo: "",
      foto: "./assets/perfil/peru.jpg",
      resumo: "",
      preparo: "",
      listaInp: [],
      categoria: "peixesFrutosDoMar",
      usuario: "admin@gmail.com",
    };

    posts.push(bolosTortas);
  }

  posts.forEach((element) => {
    receitasUserPerfil.appendChild(criarPost(element));
  });
}

document.addEventListener("DOMContentLoaded", atualizarReceitas());
