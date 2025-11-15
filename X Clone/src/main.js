import famousUsers from "./assets/celebs.js";
import trendingTopics from "./assets/trandings.js";

const choose_random = (arr,x) => {
  return arr.sort(() => Math.random() - 0.5).slice(0, x);
};

let chosen_three_celebs = choose_random(famousUsers,3);
let trandings = choose_random(trendingTopics,4)

let celebs_container = document.getElementById("celeb_pages");
let trandings_container = document.getElementById("trandings")

chosen_three_celebs.forEach((element) => {
  let celeb_pass = document.createElement("div");

  celeb_pass.innerHTML = `
    <div class="w-full flex justify-between items-center hover:bg-[#181818] transition-all duration-500 px-4 py-2 cursor-pointer">
      
      <div class="flex justify-start items-center gap-3 w-0 flex-1">
        <!-- Profile picture -->
        <div class="w-10 aspect-square rounded-full overflow-hidden shrink-0">
          <img class="w-full h-full object-cover object-center" src="${element.image}" alt="profile-pic">
        </div>

        <!-- Name + username + verified -->
        <div class="flex flex-col justify-center min-w-0 mr-3">
          <div class="flex items-center gap-1 text-md font-semibold truncate">
            <span class="truncate">${element.name}</span>
            ${
              element.verified
                ? `<svg viewBox="0 0 22 22" class="fill-[#1A8CD8] w-4 h-4 shrink-0"><g><path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path></g></svg>`
                : `<svg viewBox="0 0 22 22" class="fill-gray-400 w-4 h-4 shrink-0"><g><path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path></g></svg>`
            }
          </div>
          <div class="text-gray-400 text-sm truncate">${element.username}</div>
        </div>
      </div>

      <button class="px-6 py-2 bg-white font-semibold text-black rounded-full shrink-0">Follow</button>
    </div>
  `;

  celebs_container.appendChild(celeb_pass);
});



trandings.forEach((element)=>{
  let tranding_pass = document.createElement("div")
  tranding_pass.innerHTML = 
  `
  <div
                            class="w-full px-4 py-2 hover:bg-[#181818] transition-all duration-500 flex justify-between items-center cursor-pointer">
                            <div>
                                <div class="text-sm text-[#707070]">${element.location}</div>
                                <div class="text-md font-semibold">${element.hashtag}</div>
                                <div class="text-sm text-[#707070]">${element.posts} posts</div>
                            </div>

                            <div>
                                <svg viewBox="0 0 24 24" class="fill-gray-700 w-7 p-1  rounded-full transition-all duration-500 hover:fill-[#1A8CD8] hover:bg-[#1a8cd836]">
                                    <g>
                                        <path
                                            d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z">
                                        </path>
                                    </g>
                                </svg>
                            </div>
                        </div>
  `

  trandings_container.appendChild(tranding_pass);
})