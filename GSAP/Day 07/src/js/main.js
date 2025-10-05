import { players } from "./players.js";

const cont = document.getElementById("container");

function create_card(player) {
  const card = document.createElement("div");
  card.className = "w-[280px] drop-shadow-xl drop-shadow-zinc-900 mx-auto";
  card.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="5 1 16 24" preserveAspectRatio="xMidYMid meet">
    <defs>
      <clipPath id="my-path2">
        <path d="M 5 5 V 22 Q 5 24 7 24 C 9 24 12 24 13 25 C 14 24 17 24 19 24 Q 21 24 21 22 V 5 C 21 3 15 4 15 2 Q 14 3 13 1 Q 12 3 11 2 C 11 4 5 3 5 5" />
      </clipPath>
    </defs>

    <image
      href="https://media.istockphoto.com/id/543836212/photo/american-football-stadium-in-lights-and-flashes.jpg?s=612x612&w=0&k=20&c=hTM9XWVCHsTs54sbMB0MSTB5M7XCbVpctek9-YMXl8Y="
      x="5" y="1" width="16" height="24"
      style="filter: brightness(0.3);"
      clip-path="url(#my-path2)" preserveAspectRatio="xMidYMid slice"
    />

    <text x="6" y="7" fill="white" font-size="2.5"
      style='font-family: "Fjalla One", sans-serif;' font-weight="800">
      ${player.stat}
    </text>

    <text x="6" y="9.25" fill="white" font-size="1.8"
      style='font-family: "Fjalla One", sans-serif;'>
      ${player.position}
    </text>

    <image href="${player.image}" x="6" y="3.8" width="12.5"
      style="filter: drop-shadow(0px 0px 1px #0B0B21);" />

    <text x="13" y="15.5" text-anchor="middle" fill="white" font-size="1.85"
      style='font-family: "Fjalla One", sans-serif; filter: drop-shadow(0px 1px 1px #000);' font-weight="800">
      ${player.name}
    </text>

    <text x="13" y="18.2" text-anchor="middle" fill="#999" font-size="1.2"
      style='font-family: "Fjalla One", sans-serif; word-spacing: 0.32em;' font-weight="600">
      PAC SHO PAS DRI DEF PHY
    </text>

    <text x="13" y="20" text-anchor="middle" fill="#999" font-size="1.35"
      style='font-family: "Fjalla One", sans-serif; word-spacing: 0.55em;' font-weight="600">
      ${player.pac} ${player.sho} ${player.pas} ${player.dri} ${player.def} ${player.phy}
    </text>

    <!-- ✅ Perfectly centered flag + club pair -->
    <g transform="translate(13, 22.2)">
      <!-- Invisible reference box (helps alignment visually) -->
      <rect x="-2.5" y="-1.2" width="5" height="2.4" fill="transparent" />

      <!-- Flag (left) -->
      <image 
        href="${player.flag}" 
        x="-2.6" y="-1.2" 
        width="2.2" height="2.2"
        preserveAspectRatio="xMidYMid meet"
        style="filter: drop-shadow(0px 0px 4px #0B0B21);" 
      />

      <!-- Club (right) -->
      <image 
        href="${player.club}" 
        x="0.4" y="-1.2" 
        width="2.2" height="2.2"
        preserveAspectRatio="xMidYMid meet"
        style="filter: drop-shadow(0px 0px 4px #0B0B21);" 
      />
    </g>

    <path
      d="M 5 5 V 22 Q 5 24 7 24 C 9 24 12 24 13 25 C 14 24 17 24 19 24 Q 21 24 21 22 V 5 C 21 3 15 4 15 2 Q 14 3 13 1 Q 12 3 11 2 C 11 4 5 3 5 5"
      fill="none" stroke="gray" stroke-width="0.135" />
  </svg>
  `;
  cont.appendChild(card);
}

players.forEach(player => create_card(player));
