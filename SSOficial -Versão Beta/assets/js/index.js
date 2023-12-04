const bntopen = document.getElementById("bnt-hamburguer");
const bntclose = document.getElementById("bnt-close");
bntopen.addEventListener("click", toggleMenu);
bntclose.addEventListener("click", toggleMenu);

function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "none" ? "block" : "none";
}

function buscar() {
  const buscamodal = document.getElementById("numeros-modal");
  buscamodal.style.display =
    buscamodal.style.display === "none" ? "flex" : "none";
}
window.onclick = (e) => {
  if (e.target.className === "numeros-modal") {
    buscar();
  }
  if (e.target == "a") {
    toggleMenu();
  }
};
function opennewtab() {
  window.location.href = "compra_rifa.html";
}
