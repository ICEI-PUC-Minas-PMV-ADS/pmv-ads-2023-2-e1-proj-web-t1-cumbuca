const form = document.querySelector("form");

form.addEventListener("submit", async (ev) => {
  ev.preventDefault();

  const userData = {
    nome: document.querySelector("#userName").value,
    senha: document.querySelector("#userPass").value,
  };

  validarConta(userData.nome, userData.senha)
    .then((res) => {
      window.location.href =
        "https://pmv-ads-2023-2-e1-proj-web-t1-cumbuca.vercel.app/";
    })
    .catch((err) => {
      alert(err);
    });
});

async function validarConta(nome, senha) {
  const response = await fetch("./src/db.json");
  const contas = await response.json();

  const contasArr = contas.accounts;

  const validacao = contasArr.find(
    (conta) => conta.nome === nome && conta.senha === senha
  );

  if (validacao) {
    return validacao;
  } else {
    return Promise.reject("Dados informados incorretos");
  }
}
