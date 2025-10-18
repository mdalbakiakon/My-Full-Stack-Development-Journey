let cart_btn = document.getElementById("cart-btn")
let cart_sidebar = document.getElementById("cart-sidebar")
let cross_btn = document.getElementById("cross-btn")
let order_btn = document.querySelectorAll(".order-btn")
let counter = document.getElementById("counter")

let purchased_items = []

cart_btn.addEventListener("click", ()=>{
    cart_sidebar.classList.remove("hidden")
})

cross_btn.addEventListener("click", ()=>{
    cart_sidebar.classList.add("hidden")
})

order_btn.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        purchased_items.push(btn.getAttribute("data-product_id"))
        counter.innerText = purchased_items.length
    })
})
