const addNewBtn = document.querySelector("#addNew");
const cancelBtn = document.querySelector("#cancelBtn");
const divPub = document.querySelector(".publicaReceita");

divPub.style.display = "none";
divPub.style.position = "unset";

addNewBtn.addEventListener("click", () => {
  divPub.style.display = "flex";
  divPub.style.position = "absolute";
});

cancelBtn.addEventListener("click", () => {
  const divPub = document.querySelector(".publicaReceita");

  divPub.style.display = "none";
  divPub.style.position = "unset";
});
