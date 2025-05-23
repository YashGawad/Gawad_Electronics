let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem('Gawad Electronics', JSON.stringify(cart));
  updateCart();
  showCartMessage(`${name} added to cart!`);
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

function showCartMessage(msg) {
  let msgDiv = document.getElementById('cart-message');
  if (!msgDiv) {
    msgDiv = document.createElement('div');
    msgDiv.id = 'cart-message';
    msgDiv.style.position = 'fixed';
    msgDiv.style.top = '20px';
    msgDiv.style.left = '50%';
    msgDiv.style.transform = 'translateX(-50%)';
    msgDiv.style.background = 'var(--pixel-accent, #7c2ae8)';
    msgDiv.style.color = '#fff';
    msgDiv.style.padding = '0.75rem 2rem';
    msgDiv.style.borderRadius = '0.5rem';
    msgDiv.style.fontWeight = 'bold';
    msgDiv.style.zIndex = '9999';
    msgDiv.style.boxShadow = '0 4px 24px 0 rgba(44,62,80,0.18)';
    document.body.appendChild(msgDiv);
  }
  msgDiv.textContent = msg;
  msgDiv.style.display = 'block';
  setTimeout(() => {
    msgDiv.style.display = 'none';
  }, 1500);
}

window.onload = () => {
  cart = JSON.parse(localStorage.getItem('Gawad Electronics')) || [];
  updateCart();

  if (!localStorage.getItem('cookieConsent')) {
    alert('We use cookies to enhance your experience on Gawad Electronics.');
    localStorage.setItem('cookieConsent', 'true');
  }
};