const form = document.querySelector("form");

form.addEventListener("submit", async (ev) => {
  ev.preventDefault();

  const logins = JSON.parse(localStorage.getItem("contas"));
  const email = document.querySelector("#email");
  const pass = document.querySelector("#userPass");

  if (logins.find((conta) => conta.email === email.value)) {
    if (!logins.find((conta) => conta.senha === pass.value)) {
      alert("Senha incorreta");
      pass.focus();
      return;
    }
  } else {
    alert("Conta nao existe");
    email.focus();
    return;
  }

  location.href = "https://pmv-ads-2023-2-e1-proj-web-t1-cumbuca.vercel.app/";
});
