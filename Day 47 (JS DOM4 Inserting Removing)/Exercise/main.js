let videos = [
  {
    title:
      "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
    cName: "CodeWithHarry",
    views: 1240000,
    monthsOld: "2 months old",
    duration: "25:35",
    thumbnail:
      "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg",
  },
  {
    title:
      "JavaScript Basics | Learn JS in 1 Hour",
    cName: "CodeBucks",
    views: 540000,
    monthsOld: "6 months old",
    duration: "1:05:20",
    thumbnail:
      "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg",
  },
  {
    title:
      "HTML & CSS Crash Course",
    cName: "FreeCodeCamp",
    views: 2500000,
    monthsOld: "1 year old",
    duration: "3:20:15",
    thumbnail:
      "https://i.ytimg.com/vi/pQN-pnXPaVg/hqdefault.jpg",
  }
];


let cont = document.querySelector(".container");

function createCard(title, cName, views, monthsOld, duration, thumbnail) {
  let card = document.createElement("div");
  card.style.cssText =
    "width: 100%; height: 110px; border-radius: 10px; display: flex; gap: 10px; align-items: center; padding:5px; cursor: pointer;";

  card.addEventListener("mouseover", () => {
    card.style.background = "#191919";
  });

  card.addEventListener("mouseout", () => {
    card.style.background = "";
  });

  let thumb = document.createElement("div");
  thumb.style.cssText =
    "width: 168px; height: 94px; border-radius: 10px;overflow: hidden; display: flex;  align-items: center; justify-content: center; position: relative";

  thumb.innerHTML = `<img src="${thumbnail}" style="width:100%; height:100%; object-fit:cover;" />`;

  let dur = document.createElement("div");
  dur.style.cssText =
    "position: absolute; color:white; padding: 2px 4px; font-size: 12px; border-radius: 5px; background-color: #252525; font-weight: 500; right:5px; bottom: 5px; display:flex; justify-content: center; align-items: center;";
  dur.innerText = `${duration}`;
  thumb.append(dur);
  card.append(thumb);

  let info = document.createElement("div");
  info.style.cssText =
    "flex: 1; display: flex; flex-direction: column; gap: 5px; height: 100%; padding: 5px 0px; overflow: hidden; text-align:left;";

  let vid_title = document.createElement("div");
  vid_title.style.cssText = `
  width: 100%;
  font-size: 1rem;
  color: white;
  font-weight: 400;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
  vid_title.innerText = `${title}`;
  info.append(vid_title);

  let cName_views_timeline = document.createElement("div");
  cName_views_timeline.style.cssText = `
    width: 100%;
    color: white;
    opacity: 0.5;
    font-size: 13px;
    `;

if (views >= 1000000) {
  views = (views / 1000000);
    views = views % 1 === 0 ? views.toFixed(0) : views.toFixed(1);
  views = views + "M views";
} else if (views >= 1000) {
  views = (views / 1000).toFixed(0);
  views = views + "K views";
} else {
  views = views + " views";
}

  cName_views_timeline.innerHTML = `
  ${cName} <b>•</b> ${views} <b>•</b> ${monthsOld}
`;

  info.append(cName_views_timeline);
  card.append(info);
  cont.append(card);
}


videos.forEach(video =>{
    createCard(
        video.title,
        video.cName,
        video.views,
        video.monthsOld,
        video.duration,
        video.thumbnail
    )
})