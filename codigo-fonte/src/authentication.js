const form = document.querySelector("form");

form.addEventListener("submit", async (ev) => {
  ev.preventDefault();

  const userData = {
    nome: document.querySelector("#userName").value,
    senha: document.querySelector("#userPass").value,
  };

  validarConta(userData.nome, userData.senha)
    .then((res) => {
      window.location.href = "http://127.0.0.1:5500/codigo-fonte/index.html";
    })
    .catch((err) => {
      alert(err);
    });
});

async function validarConta(nome, senha) {
  const response = await fetch("http://localhost:3000/accounts");
  const contas = await response.json();

  const contaEncontrada = contas.find(
    (conta) => conta.nome === nome && conta.senha === senha
  );

  if (contaEncontrada) {
    return "Contra encontrada";
  } else {
    return Promise.reject("Conta nao encontrada");
  }
}
