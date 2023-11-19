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

addItemIng.addEventListener("click", () => {
  const item = ingredientes.value;

  if (item === "") {
    alert("Deve ser preenchido um item");
    ingredientes.focus();
  }
});

cancelBtn.addEventListener("click", () => {
  const divPub = document.querySelector(".publicaReceita");
  const titulo = document.querySelector("#receitaTitle");
  const fotoReceita = document.querySelector("#addImg");
  const resumo = document.querySelector("#resume");
  const preparo = document.querySelector("#preparo");
  const ingredientes = document.querySelector("#ingredientes");

  titulo.value = "";
  fotoReceita.value = "";
  resumo.value = "";
  preparo.value = "";
  ingredientes.value = "";

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
