const mostrarBtn = document.querySelector("#mostrarBtn");
const infos = document.querySelector("#valores");
const imgShow = document.querySelector("#show-more");
const areaComentario = document.querySelector("#comentar");
const contador = document.querySelector("#contador");
let contadorTexto = 0;
const enterMsg = document.querySelector("#enterMsg");

mostrarBtn.addEventListener("click", () => {
  infos.classList.toggle("container-infos-receita");
  imgShow.classList.toggle("inverterBotao");
});

areaComentario.addEventListener("keydown", (ev) => {
  const caracteresEspeciais = ["Enter", "Shift"];
  if (
    ev.key === "Backspace" &&
    contadorTexto > 0 &&
    !caracteresEspeciais.includes(ev.key)
  ) {
    contadorTexto--;
  } else if (
    contadorTexto < 50 &&
    contadorTexto >= 0 &&
    ev.key !== "Backspace" &&
    !caracteresEspeciais.includes(ev.key)
  ) {
    contadorTexto++;
  } else if (ev.key === "Enter") {
    ev.preventDefault();
    addComent();
    return;
  }

  contador.textContent = contadorTexto;
});

enterMsg.addEventListener("mouseover", () => {
  enterMsg.src = "./assets/receita/plano (1).png";
});

enterMsg.addEventListener("mouseout", () => {
  enterMsg.src = "./assets/receita/plano.png";
});

enterMsg.addEventListener("click", addComent);

function addComent() {
  const comentarios = document.querySelector(".comentarios");

  if (areaComentario.value === "") {
    return;
  }

  const userComents = document.createElement("div");
  const img = document.createElement("img");
  const input = document.createElement("input");

  userComents.classList.add("userComents");
  img.src = "./assets/Avatar.svg";
  img.classList.add("icone__botao", "avatar");
  input.type = "text";
  input.name = "comentarioUser";
  input.classList.add("comentarioUser");
  input.disabled = true;
  input.value = areaComentario.value;

  userComents.append(img, input);
  comentarios.insertBefore(userComents, comentarios.firstChild);

  areaComentario.value = "";
  contadorTexto = 0;
  contador.textContent = contadorTexto;
}

const imgPoster = document.querySelector("#imgPoster");
const tituloDaReceita = document.querySelector("#tituloDaReceita");
const resumeReceita = document.querySelector("#resumeReceita");
const ingredienteReceita = document.querySelector("#ingredienteReceita");
const preparoReceita = document.querySelector("#preparoReceita");

const receitaAtual = JSON.parse(localStorage.getItem("receitaAtual"));

imgPoster.src = receitaAtual.foto;
