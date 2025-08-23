import { products } from "./products.js";

document.addEventListener("DOMContentLoaded", () => {
  const openCartBtn = document.getElementById("open-cart");
  const closeCartBtn = document.getElementById("close-cart");
  const overlay = document.getElementById("overlay");
  const cartContainer = document.getElementById("cart-container");
  const ghost = document.getElementById("empty-ghost");
  const body = document.body;

  const cartItemsContainer = document.getElementById("cart-items");
  const subtotalPrice = document.getElementById("total-price");
  const cartCount = document.getElementById("cart-count");
  const removeAllDiv = document.getElementById("remove-all-div");
  const removeAllBtn = document.getElementById("remove-all-btn");

  const promoInput = document.getElementById("promo-input");
  const applyPromoBtn = document.getElementById("apply-promo");
  const promoMessage = document.getElementById("promo-message");

  let cartItems = [];
  let appliedPromo = null; // Track applied promo code

  function addToCart(productId) {
    const product = products.find((p) => p.pro_id === Number(productId));
    if (!product) return;

    const existingItem = cartItems.find(
      (item) => item.pro_id === product.pro_id
    );
    if (existingItem) {
      existingItem.qty += 1;
    } else {
      cartItems.push({ ...product, qty: 1 });
    }

    renderCart();
  }

  function increaseQty(productId) {
    const item = cartItems.find((item) => item.pro_id === productId);
    if (item) {
      item.qty += 1;
      renderCart();
    }
  }

  function decreaseQty(productId) {
    const index = cartItems.findIndex((item) => item.pro_id === productId);
    if (index !== -1) {
      if (cartItems[index].qty > 1) {
        cartItems[index].qty -= 1;
      } else {
        cartItems.splice(index, 1);
      }
      renderCart();
    }
  }

  function clearCart() {
    cartItems = [];
    appliedPromo = null;
    promoInput.value = "";
    promoMessage.classList.add("hidden");
    renderCart();
  }

  function applyPromo(total) {
    if (!appliedPromo) return total;
    if (appliedPromo === "ostad10") {
      return total * 0.9;
    } else if (appliedPromo === "ostad50") {
      return total * 0.5;
    }
    return total;
  }

  function renderCart() {
    cartItemsContainer.innerHTML = "";

    let total = 0;
    let totalQty = 0;

    if (cartItems.length === 0) {
      ghost.classList.remove("hidden");
      removeAllDiv.classList.add("hidden"); // hide when empty
      cartItemsContainer.classList.add("hidden");
    } else {
      ghost.classList.add("hidden");
      removeAllDiv.classList.remove("hidden"); // force show when items exist
      cartItemsContainer.classList.remove("hidden");
    }

    cartItems.forEach((item) => {
      const itemTotal = parseFloat(item.price.replace("$", "")) * item.qty;
      total += itemTotal;
      totalQty += item.qty;

      const itemElement = document.createElement("div");
      itemElement.className =
        "flex justify-between items-center text-lg text-white mb-2";

      itemElement.innerHTML = `
        <div class="flex justify-between items-center w-full h-[60px] gap-2">
          <div class="h-full aspect-square bg-[#252525] flex items-center justify-center rounded-2xl overflow-hidden shrink-0">
            <img class="h-full w-full object-contain p-1" src="${item.pro_image}" />
          </div>
          <div class="flex flex-col justify-center text-[#a7a7a7] flex-1 overflow-hidden">
            <h4 class="text-md text-[#e6e6e6] leading-5 font-semibold truncate">${item.pro_name}</h4>
            <div class="text-sm font-bold truncate">${item.price} per unit</div>
          </div>
          <div class="flex items-center gap-2 ml-2 shrink-0">
            <button class="decrease-btn text-amber-300 p-2 w-6 select-none cursor-pointer font-semibold">-</button>
            <p class="text-md font-semibold text-white">${item.qty}</p>
            <button class="increase-btn text-amber-300 p-2 w-6 select-none cursor-pointer font-semibold">+</button>
          </div>
        </div>
      `;

      const decreaseBtn = itemElement.querySelector(".decrease-btn");
      const increaseBtn = itemElement.querySelector(".increase-btn");

      decreaseBtn.addEventListener("click", () => decreaseQty(item.pro_id));
      increaseBtn.addEventListener("click", () => increaseQty(item.pro_id));

      cartItemsContainer.appendChild(itemElement);
    });

    // Apply promo if available
    let discountedTotal = applyPromo(total);

    subtotalPrice.textContent = `$${discountedTotal.toFixed(2)}`;
    cartCount.textContent = totalQty;
  }

  // Promo Button Logic
  applyPromoBtn.addEventListener("click", () => {
    const code = promoInput.value.trim().toLowerCase();

    if (appliedPromo) {
      promoMessage.textContent = "Promo Code already applied.";
      promoMessage.classList.remove("hidden");
      promoMessage.classList.remove("text-green-400");
      promoMessage.classList.add("text-red-500");
      return;
    }

    if (code === "ostad10" || code === "ostad50") {
      appliedPromo = code;
      promoMessage.textContent = `Promo Applied: ${code.toUpperCase()}`;
      promoMessage.classList.remove("hidden");
      promoMessage.classList.remove("text-red-500");
      promoMessage.classList.add("text-green-400");
      renderCart();
    } else {
      promoMessage.textContent = "Invalid Promo Code";
      promoMessage.classList.remove("hidden");
      promoMessage.classList.remove("text-green-400");
      promoMessage.classList.add("text-red-500");
    }
  });

  document.addEventListener("add-to-cart", (e) => {
    const id = e.detail.productId;
    addToCart(id);
  });

  openCartBtn.addEventListener("click", () => {
    overlay.classList.remove("hidden");
    cartContainer.classList.remove("hidden");
    body.classList.add("overflow-hidden");
  });

  const closeCart = () => {
    overlay.classList.add("hidden");
    cartContainer.classList.add("hidden");
    body.classList.remove("overflow-hidden");
  };

  closeCartBtn.addEventListener("click", closeCart);
  overlay.addEventListener("click", closeCart);
  removeAllBtn.addEventListener("click", clearCart);
});
