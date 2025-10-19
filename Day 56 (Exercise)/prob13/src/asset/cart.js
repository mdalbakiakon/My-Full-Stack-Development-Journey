let cart_btn = document.getElementById("cart-btn");
let cart_sidebar = document.getElementById("cart-sidebar");
let cross_btn = document.getElementById("cross-btn");
let order_btn = document.querySelectorAll(".order-btn");
let counter = document.getElementById("counter");
let remove_all = document.getElementById("remove-all");
let empty_cart_list = document.getElementById("empty-cart-list");
let cart_item_list = document.getElementById("cart-item-list");
let total_pay = document.getElementById("total-pay");
let cart_list_container = document.getElementById("cart-list-container");


function sum_total_pay() {
    let sum = 0;
    for (const price of purchased_items_price) {
        sum = sum + parseFloat(price);
    }
    return sum.toFixed(2);
}


function add_to_cart_list_container(p_img,p_name,p_price) {

    let added_item = document.createElement("div");
    added_item.className = "w-full flex items-center gap-2";

    added_item.innerHTML = `
                        <div class="h-[65px] aspect-square bg-amber-300 p-1 rounded-2xl flex justify-center items-center">
                            <img src=${p_img}
                                alt="" class="object-contain drop-shadow-lg">
                        </div>
                        <div
                            class="flex-1 overflow-x-hidden h-full flex flex-col justify-center items-start tracking-tighter">
                            <h2 class="font-semibold text-xl truncate w-full">${p_name}</h2>
                            <h2 class="text-md text-[#858585] line-clamp-1 truncate w-full font-semibold">Price per unit
                                $<span>${p_price}</span>
                            </h2>
                        </div>
    `;

    cart_list_container.appendChild(added_item)
}


let purchased_items = [];
let purchased_items_price = [];

cart_btn.addEventListener("click", () => {
    cart_sidebar.classList.remove("hidden");
});

cross_btn.addEventListener("click", () => {
    cart_sidebar.classList.add("hidden");
});

order_btn.forEach((btn) => {
    btn.addEventListener("click", () => {
        purchased_items.push(btn.getAttribute("data-product_id"));
        purchased_items_price.push(btn.getAttribute("data-product_price"));
        counter.innerText = purchased_items.length;
        empty_cart_list.classList.add("hidden");
        cart_item_list.classList.remove("hidden");
        remove_all.classList.remove("hidden");
        total_pay.innerText = sum_total_pay();
        
        let x = btn.getAttribute("data-product_img")
        let y = btn.getAttribute("data-product_name")
        let z = btn.getAttribute("data-product_price")

        add_to_cart_list_container(x,y,z)
    });
});

remove_all.addEventListener("click", () => {
    purchased_items.length = 0;
    purchased_items_price.length = 0;
    counter.innerText = purchased_items.length;
    empty_cart_list.classList.remove("hidden");
    cart_item_list.classList.add("hidden");
    remove_all.classList.add("hidden");
    total_pay.innerText = "0.00";
    cart_list_container.innerHTML = '';
});
