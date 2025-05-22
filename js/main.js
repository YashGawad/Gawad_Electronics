let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem('Gawad Electronics', JSON.stringify(cart));
  updateCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem('Gawad Electronics', JSON.stringify(cart));
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const cartCount = document.getElementById('cart-count');
  const cartTotal = document.getElementById('cart-total');

  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    cartItems.innerHTML += `
      <li class="flex justify-between items-center border-b border-gray-600 pb-1">
        <span>${item.name}</span>
        <button onclick="removeFromCart(${index})">❌</button>
      </li>`;
  });

  cartCount.textContent = cart.length;
  cartTotal.textContent = total;
}

function toggleCart() {
  document.getElementById('cart').classList.toggle('hidden');
}

window.onload = () => {
  cart = JSON.parse(localStorage.getItem('Gawad Electronics')) || [];
  updateCart();

  if (!localStorage.getItem('cookieConsent')) {
    alert('We use cookies to enhance your experience on Gawad Electronics.');
    localStorage.setItem('cookieConsent', 'true');
  }
};