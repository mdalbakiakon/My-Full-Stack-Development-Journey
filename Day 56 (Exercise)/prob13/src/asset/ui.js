import { products } from "./products.js"
let product_container = document.getElementById("product-container")

function card_render(p) {
    let card = document.createElement("div")
    card.className = "flex flex-col gap-5 w-[270px] shadow-2xl rounded-[36px] py-5 mx-auto"
    card.innerHTML = 
    `
    <div class="w-[270px] relative">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">

                    <path
                        d="M 0 21 Q 0 24 3 24 H 15 Q 18 24 18 21 Q 18 18 21 18 Q 24 18 24 15 V 3 Q 24 0 21 0 H 3 Q 0 0 0 3 Z"
                        fill="#303030" />
                    
                    <text 
                        x="1" 
                        y="3.5" 
                        font-size="2.5" 
                        text-anchor="start" 
                        fill="#FFD230" 
                        font-weight="900"
                        font-family="Outfit">
                        $
                    </text>

                    <text 
                        x="2.7" 
                        y="4.25" 
                        font-size="4" 
                        text-anchor="start" 
                        fill="white" 
                        font-weight="900"
                        font-family="Outfit">
                        ${p.p_price}
                    </text>


                    <image
                        
                        href= ${p.p_img}
                        width="18px" 
                        height="18px" 
                        x="3" 
                        y="3" 
                        preserveAspectRatio="xMidYMid meet" 
                        class="filter drop-shadow-sm"
                        />

                </svg>

                <div data-product_id="${p.p_id}"
                    class="order-btn rounded-full h-[50px] aspect-square bg-amber-300 absolute right-2.5 bottom-2.5 cursor-pointer flex justify-center items-center text-2xl text-zinc-900">
                    <i class="fi fi-br-shopping-cart-add flex justify-center items-center"></i>
                </div>
            </div>

            <div class="flex flex-col gap-3">
                <h2 class="text-center text-2xl font-semibold">${p.p_name}</h2>
                <h3 class="text-center text-md font-semibold text-[#555555] leading-4 px-8">${p.p_description}</h3>
            </div>
    `

    product_container.appendChild(card)
}


products.forEach((p)=>{
    card_render(p)
})