import { products } from "./products.js";

const container = document.getElementById("container");

function render_card(e) {
  let card = document.createElement("div");
  card.className =
    "w-[250px] h-[400px] rounded-2xl overflow-hidden shadow-xl flex flex-col mx-auto";

  card.innerHTML = `
    <div class="w-full h-[60%] rounded-t-2xl">
    <img
      src=${e.p_img}
      alt="Product"
      class="w-full h-full object-contain drop-shadow-xl"
    />
  </div>

  <div class="px-4 w-full text-[#181818] flex-1 relative">
    <h2 class="text-2xl font-bold text-center">${e.p_name}</h2>
    <h3 class="text-center text-[#505050] leading-3">from</h3>
    <h2 class="text-2xl font-bold text-center"><span class="text-sm font-black text-[#505050] relative bottom-[5px]">$</span>${e.p_price}</h2>
    <button
      type="submit"
      data-id=${e.p_id}
      class="order absolute left-1/2 -translate-x-1/2 bottom-4 w-1/2 p-2 bg-[#181818] cursor-pointer font-semibold rounded-lg text-md text-white text-center"
    >
      Order Now
    </button>
  </div>
    `;
  container.appendChild(card);
}

products.forEach((p) => {
  render_card(p);
});

let purchased = [];

let orders_btn = document.querySelectorAll(".order");

orders_btn.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const id = event.target.getAttribute("data-id");
    purchased.push(id);

    let count_purchase = document.getElementById("counter");
    count_purchase.innerText = purchased.length;
  });
});

const cart = document.getElementById("cart");
const overlay = document.getElementById("overlay-click");
const overlay_sidebar = document.getElementById("overlay-sidebar");
const isEmpty = document.getElementById("empty-cart");


cart.addEventListener("click", () => {
  document.body.classList.add("overflow-hidden");
  overlay.classList.remove("hidden");
  overlay_sidebar.classList.remove("hidden");
});

overlay.addEventListener("click", () => {
  document.body.classList.remove("overflow-hidden");
  overlay.classList.add("hidden");
  overlay_sidebar.classList.add("hidden");
});
