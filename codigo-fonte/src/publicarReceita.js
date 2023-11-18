const addNewBtn = document.querySelector("#addNew");
const cancelBtn = document.querySelector("#cancelBtn");

addNewBtn.addEventListener("click", () => {
  const divPub = document.querySelector(".publicaReceita");

  divPub.style.display = "block";
  divPub.style.position = "absolute";
});

cancelBtn.addEventListener("click", () => {
  const divPub = document.querySelector(".publicaReceita");

  divPub.style.display = "none";
  divPub.style.position = "unset";
});
