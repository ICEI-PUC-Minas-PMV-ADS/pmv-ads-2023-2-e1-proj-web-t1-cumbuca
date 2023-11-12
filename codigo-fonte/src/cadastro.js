const form = document.querySelector("form");

class Account {
  constructor(email, nome, senha) {
    this.email = email;
    this.nome = nome;
    this.senha = senha;
  }
}

form.addEventListener("submit", (ev) => {
  ev.preventDefault();

  const email = document.querySelector("#email");
  const name = document.querySelector("#name");
  const pass = document.querySelector("#pass");
  const repeatPass = document.querySelector("#repeatPass");

  if (
    JSON.parse(localStorage.getItem("contas"))?.find(
      (user) => user.email === email.value
    )
  ) {
    alert("Já existe um cadastro com esse e-mail");
    email.focus();
    return;
  }

  let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!re.test(email.value)) {
    alert("O formato do email está errado");
    email.focus();
    return;
  }

  if (pass.value !== repeatPass.value) {
    alert("As senhas não coincidem");
    return;
  }

  const user = new Account(email.value, name.value, pass.value);

  let accounts = JSON.parse(localStorage.getItem("contas")) ?? [];
  accounts.push(user);

  localStorage.setItem("contas", JSON.stringify(accounts));

  form.reset();
  location.href = "../codigo-fonte/login.html";
});
