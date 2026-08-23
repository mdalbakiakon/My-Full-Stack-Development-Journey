import React from "react";

const PostCard = ({ post }) => {
  return (
    <div className="w-full rounded-4xl shadow-lg hover:shadow-xl overflow-hidden transition-all duration-300 ease-in-out">
      <div className="w-full aspect-square rounded-t-4xl overflow-hidden shadow-xs">
        <img
          src={post.imgURL}
          alt={post.caption}
          className="object-center object-cover w-full h-full"
        />
      </div>

      <div className="bg-[#151515] w-full h-fit p-2.5">
        <h2 className="w-full font-semibold text-sm text-neutral-500 text-center line-clamp-2">
          {post.caption}
        </h2>
      </div>
    </div>
  );
};

export default PostCard;
