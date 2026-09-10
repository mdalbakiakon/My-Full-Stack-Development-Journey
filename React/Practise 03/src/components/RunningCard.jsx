import React from "react";

const dummy = [
  {
    id: 1,
    title: "Sample Image 1",
    imageUrl: "https://picsum.photos/id/1015/3840/2160",
  },
  {
    id: 2,
    title: "Sample Image 2",
    imageUrl: "https://picsum.photos/id/1018/3840/2160",
  },
  {
    id: 3,
    title: "Sample Image 3",
    imageUrl: "https://picsum.photos/id/1039/3840/2160",
  },
  {
    id: 4,
    title: "Sample Image 4",
    imageUrl: "https://picsum.photos/id/1043/3840/2160",
  },
  {
    id: 5,
    title: "Sample Image 5",
    imageUrl: "https://picsum.photos/id/1050/3840/2160",
  },
];

const RunningCard = () => {
  // duplicate so the loop looks seamless
  const loopItems = [...dummy, ...dummy];

  return (
    <div id="run-card" className="overflow-hidden w-full mask-[image:linear-gradient(to_right,transparent,red,transparent)] origin-center -rotate-30">
      <div className="flex flex-nowrap gap-2.5 w-max animate-scroll-left">
        {loopItems.map((elem, i) => {
          return (
            <div
              key={`${elem.id}-${i}`}
              className="w-75 aspect-video rounded-4xl overflow-hidden relative shrink-0"
            >
              <img
                src={elem.imageUrl}
                alt={elem.title}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RunningCard;