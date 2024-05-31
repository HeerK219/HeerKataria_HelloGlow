// JavaScript (cart.js)

// Cart data structure
let cart = [];

// Function to add item to cart
function addToCart(name, price) {
  cart.push({ name, price, quantity: 1 });
  renderCart();
}

// Function to remove item from cart
function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}

// Function to render cart contents
function renderCart() {
  const cartElement = document.getElementById("cart");
  cartElement.innerHTML = "";

  cart.forEach((item, index) => {
    const itemElement = document.createElement("div");
    itemElement.innerHTML = `
            <p>${item.name} - ${item.price}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
    cartElement.appendChild(itemElement);
  });
}

// Event listener for "Add to Cart" buttons
document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    const name = button.dataset.name;
    const price = parseFloat(button.dataset.price);
    addToCart(name, price);
  });
});

// Initial render
renderCart();