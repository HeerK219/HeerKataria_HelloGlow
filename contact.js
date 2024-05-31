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
  if (cartElement) {
    cartElement.innerHTML = "";
    cart.forEach((item, index) => {
      const itemElement = document.createElement("div");
      itemElement.innerHTML = `
        <p>${item.name} - $${item.price.toFixed(2)}</p>
        <button onclick="removeFromCart(${index})">Remove</button>
      `;
      cartElement.appendChild(itemElement);
    });
  }
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

// Function to validate contact form
function validateContactForm() {
  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formError = document.getElementById("formError");

  // Regular expressions for validation
  const nameRegex = /^[a-zA-Z\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  formError.style.display = "none";

  // Validate full name
  if (!nameRegex.test(fullName)) {
    formError.innerHTML = "Invalid full name. Please enter a valid name.";
    formError.style.display = "block";
    return false;
  }

  // Validate email
  if (!emailRegex.test(email)) {
    formError.innerHTML = "Invalid email. Please enter a valid email address.";
    formError.style.display = "block";
    return false;
  }

  // Validate message
  if (message === "") {
    formError.innerHTML = "Message cannot be empty. Please enter your message.";
    formError.style.display = "block";
    return false;
  }

  // Show success message
  alert("Message sent successfully!");
  return true;
}

// Event listener for contact form submission
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (validateContactForm()) {
      contactForm.reset();
    }
  });
}