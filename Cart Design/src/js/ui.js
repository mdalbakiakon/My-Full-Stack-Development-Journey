import { products } from "./products.js";

const container = document.getElementById("product-container");

function isLightColor(color) {
  const temp = document.createElement("div");
  temp.style.color = color;
  document.body.appendChild(temp);
  const rgb = getComputedStyle(temp).color;
  document.body.removeChild(temp);
  const [r, g, b] = rgb.match(/\d+/g).map(Number);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 170;
}

function createProductCard(product) {
  const { brand_name, pro_image, color, price, pro_name, pro_description, pro_id } = product;

  const card = document.createElement("div");
  card.className = "relative flex flex-col w-[300px] h-[450px] rounded-4xl shadow-md mx-auto mt-10 mb-10";

  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("xmlns", svgNS);
  svg.setAttribute("viewBox", "0 0 12 12");
  svg.style.width = "100%";


  const path = document.createElementNS(svgNS, "path");
  path.setAttribute(
    "d",
    "M 0 7 V 10 Q 0 12 2 12 H 8 A 1 1 0 0 0 9 11 A 1 1 0 0 1 10 10 H 11 Q 12 10 12 9 V 2 Q 12 0 10 0 H 2 Q 0 0 0 2 Z"
  );
  path.setAttribute("fill", color);
  svg.appendChild(path);


  const text = document.createElementNS(svgNS, "text");
  text.setAttribute("x", "11.5");
  text.setAttribute("y", "2.5");
  text.setAttribute("font-family", "Outfit, sans-serif");
  text.setAttribute("font-size", "2.75");
  text.setAttribute("text-anchor", "end");
  text.setAttribute("font-weight", "bold");

  if (color.toLowerCase() === "#ffffff" || color.toLowerCase() === "#fff" || color.toLowerCase() === "white") {
    text.setAttribute("fill", "#303030");
  } else {
    text.setAttribute("fill", isLightColor(color) ? "white" : "#ffffff3d");
  }

  text.textContent = brand_name;
  svg.appendChild(text);


  const image = document.createElementNS(svgNS, "image");
  image.setAttribute("href", pro_image);
  image.setAttribute("x", "1.5");
  image.setAttribute("y", "1.5");
  image.setAttribute("width", "9");
  image.setAttribute("height", "9");
  image.setAttribute("preserveAspectRatio", "xMidYMid meet");
  svg.appendChild(image);

  card.appendChild(svg);


  const button = document.createElement("div");
  button.className =
    "absolute bottom-[150px] right-6 w-12 h-12 bg-primary rounded-full flex justify-center items-center cursor-pointer";
  button.innerHTML =
    '<span class="material-symbols-rounded text-white !text-3xl">add_shopping_cart</span>';
  button.style.userSelect = "none";

  button.addEventListener("click", () => {
    const event = new CustomEvent("add-to-cart", {
      detail: { productId: pro_id },
    });
    document.dispatchEvent(event);
  });

  card.appendChild(button);


  const bar = document.createElement("div");
  bar.className = "bar absolute right-2 bottom-[154px] h-10 w-3 rounded-3xl";
  bar.style.backgroundColor = color.toLowerCase() === "#ffffff" || color.toLowerCase() === "#fff" ? "#303030" : color;
  card.appendChild(bar);


  const cardPrice = document.createElement("div");
  cardPrice.className = "absolute bottom-[107px] left-2 text-2xl font-bold text-white px-2 py-1 rounded-full";
  cardPrice.textContent = price;
  cardPrice.style.backgroundColor = "#FFD230";
  cardPrice.style.color = "#303030";
  card.appendChild(cardPrice);


  const cardName = document.createElement("div");
  cardName.className = "text-lg mt-18 text-center leading-4 font-semibold text-primary mt-2 px-5";
  cardName.textContent = pro_name;
  card.appendChild(cardName);


  const cardDescription = document.createElement("div");
  cardDescription.className = "text-sm text-center leading-4 text-primary p-3";
  cardDescription.textContent = pro_description;
  card.appendChild(cardDescription);

  return card;
}


products.forEach((product) => {
  container.appendChild(createProductCard(product));
});
