import { db } from "./firebase.js";

import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
// Banner Slider
const banners = [
  "https://picsum.photos/800/300?random=1",
  "https://picsum.photos/800/300?random=2",
  "https://picsum.photos/800/300?random=3"
];

let bannerIndex = 0;

setInterval(() => {
  const banner = document.getElementById("banner");
  if (banner) {
    bannerIndex = (bannerIndex + 1) % banners.length;
    banner.src = banners[bannerIndex];
  }
}, 3000);

// Search
function searchProduct() {
  let text = document.getElementById("search").value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let name = card.querySelector("h3").innerText.toLowerCase();
    card.style.display = name.includes(text) ? "block" : "none";
  });
}

// Wishlist
let wishlist = 0;

function addWishlist() {
  wishlist++;
  alert("❤️ Wishlist-এ যোগ হয়েছে!\nমোট: " + wishlist);
}

// Cart
let cartCount = 0;

function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({
    name: name,
    price: price
  });

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("🛒 Cart-এ যোগ হয়েছে!");
}

// Profit Calculator
function calculateProfit() {
  let profit = Number(document.getElementById("profit").value);

  let finalPrice = 499 + profit;

  document.getElementById("finalPrice").innerHTML =
    "Customer Price: ₹" + finalPrice;
}

// WhatsApp Share
function shareWhatsApp() {
  let text =
    "🛍️ Premium T-Shirt\n" +
    "Price: ₹599\n" +
    "Buy from SayonMart";

  let url = "https://wa.me/?text=" + encodeURIComponent(text);

  window.open(url, "_blank");
}
// Show Admin Products
const productsDiv = document.getElementById("products");

if (productsDiv) {
  let products = JSON.parse(localStorage.getItem("products")) || [];

  products.forEach(product => {
    productsDiv.innerHTML += `
      <div class="card">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button onclick="addToCart('${product.name}', ${product.price})">🛒 Add to Cart</button>
      </div>
    `;
  });
}
/
async function loadProducts() {
  const productsDiv = document.getElementById("products");
  if (!productsDiv) return;

  productsDiv.innerHTML = "";

  const querySnapshot = await getDocs(collection(db, "products"));

  querySnapshot.forEach((doc) => {
    const product = doc.data();

    productsDiv.innerHTML += `
      <div class="card">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button onclick="addToCart('${product.name}', ${product.price})">
          🛒 Add to Cart
        </button>
      </div>
    `;
  });
}

loadProducts();