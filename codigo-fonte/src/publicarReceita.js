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

  titulo.value = "";
  fotoReceita.value = "";
  resumo.value = "";
  preparo.value = "";
  ingredientes.value = "";

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
  const ingredientes = document.querySelector("#ingredientes");

  if (
    titulo.value === "" ||
    fotoReceita.value === "" ||
    resumo.value === "" ||
    preparo.value === "" ||
    ingredientes.value === ""
  ) {
    alert("Todos os campos devem ser preenchidos");
    return;
  }
});
