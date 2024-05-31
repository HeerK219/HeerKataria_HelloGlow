document.addEventListener("DOMContentLoaded", () => {
    let cart = [];
  
    document.querySelectorAll(".add-to-cart").forEach((button) => {
      button.addEventListener("click", (event) => {
        const name = event.target.dataset.name;
        const price = parseFloat(event.target.dataset.price);
  
        const item = cart.find((product) => product.name === name);
  
        if (item) {
          item.quantity++;
        } else {
          cart.push({ name, price, quantity: 1 });
        }
  
        updateCart();
      });
    });
  
    function updateCart() {
      const cartItemsContainer = document.getElementById("cart-items");
      const cartCount = document.querySelector(".cart-count");
      const cartTotal = document.getElementById("cart-total");
  
      cartItemsContainer.innerHTML = "";
      let total = 0;
  
      cart.forEach((item) => {
        const li = document.createElement("li");
        li.className = "cart-item";
        li.innerHTML = `
                  <span>${item.name} - £${item.price.toFixed(2)} x </span>
                  <input type="number" value="${
                    item.quantity
                  }" min="1" data-name="${item.name}">
                  <button class="remove" data-name="${item.name}">Remove</button>
              `;
  
        cartItemsContainer.appendChild(li);
        total += item.price * item.quantity;
      });
  
      cartCount.textContent = cart.reduce(
        (total, item) => total + item.quantity,
        0
      );
      cartTotal.textContent = total.toFixed(2);
  
      document.querySelectorAll(".remove").forEach((button) => {
        button.addEventListener("click", (event) => {
          removeFromCart(event.target.dataset.name);
        });
      });
  
      document.querySelectorAll(".cart-item input").forEach((input) => {
        input.addEventListener("change", (event) => {
          updateItemQuantity(event.target.dataset.name, event.target.value);
        });
      });
    }
  
    function removeFromCart(name) {
      cart = cart.filter((item) => item.name !== name);
      updateCart();
    }
  
    function updateItemQuantity(name, quantity) {
      const item = cart.find((product) => product.name === name);
      if (item) {
        item.quantity = parseInt(quantity, 10);
        if (item.quantity <= 0) {
          removeFromCart(name);
        } else {
          updateCart();
        }
      }
    }
  
    document.getElementById("checkout-button").addEventListener("click", () => {
      const modal = document.getElementById("checkout-modal");
      modal.style.display = "block";
  
      const close = document.querySelector(".close");
      close.onclick = function () {
        modal.style.display = "none";
      };
  
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    });
  
    document
      .getElementById("checkout-form")
      .addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Checkout process initiated.");
      });
  });
  document.getElementById("checkout-form").addEventListener("submit", (event) => {
    event.preventDefault();
  
    // Simulate payment process
    setTimeout(() => {
      alert("Payment done!");
      window.location.href = "Home.html"; // Redirect to home page after payment
    }, 2000); // Simulating a 2-second payment process
  
    // Optional: You can add actual payment processing logic here
  });