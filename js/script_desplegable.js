const nav = document.getElementById("nav"),
abrir = document.getElementById("abrir"),
cerrar = document.getElementById("cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
    cerrar.classList.add("visible");
});
cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
    cerrar.classList.remove("visible"); 
});

