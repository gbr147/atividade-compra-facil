const buyButtons = document.querySelectorAll(".buy-button");
const cartButton = document.querySelector(".cart-button");
const filterButton = document.querySelector(".filter-button");

let cartItems = 0;

buyButtons.forEach((button) => {
    button.addEventListener("click", () => {
        cartItems++;

        alert("Jogo adicionado ao carrinho!");
    });
});

cartButton.addEventListener("click", () => {
    alert(`Você possui ${cartItems} jogo(s) no carrinho.`);
});

filterButton.addEventListener("click", () => {
    alert("Funcionalidade de filtros em desenvolvimento.");
});

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./sw.js")
            .then(() => {
                console.log("Service Worker registrado com sucesso.");
            })
            .catch((error) => {
                console.error("Erro ao registrar o Service Worker:", error);
            });
    });
}