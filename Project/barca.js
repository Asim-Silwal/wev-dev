
document.getElementById("menu-toggle").addEventListener("click", () => {
    document.getElementById("nav-menu").classList.toggle("active");
});

document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
        alert("Item added to cart!");
    });
});
