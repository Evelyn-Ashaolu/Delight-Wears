document.getElementById("shopBtn").addEventListener("click", function() {
    alert("Redirecting to shop...");
  });
  let cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        const price = parseFloat(button.getAttribute('data-price'));

        const product = { name, price };
        cart.push(product);

        alert(`${name} has been added to your cart!`);
        console.log(cart); // For debugging
    });
});
