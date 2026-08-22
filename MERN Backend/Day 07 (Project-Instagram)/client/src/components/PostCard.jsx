import React from "react";
import { Heart, MessageCircle, Bookmark } from "lucide-react";

const PostCard = ({ post }) => {
  return (
    <div className="bg-[#111] w-xs rounded-lg h-110 text-[#d3d3d3] flex flex-col p-2.5 gap-2.5">
      {/* head div -- dp + follow button*/}
      <div className="w-full flex justify-between items-start h-10.5">
        <div className="h-full flex justify-center items-start gap-2.5">
          <img
            src="https://imgs.search.brave.com/eGOySACL5x71H7-G1iunz-ymS6kYV4YPuYM0JuE3yCg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzY5LzZl/LzlkLzY5NmU5ZGZh/MWEzOTM2YmNiYmUx/MmZmMjgxNDQ5Mzlk/LmpwZw"
            alt=""
            className="h-full aspect-square rounded-full object-center object-cover"
          />
          <span className="font-semibold text-sm">{post.author}</span>
        </div>

        <button className="px-2.5 py-1.25 rounded-lg bg-blue-500 font-semibold text-xs cursor-pointer">
          Follow
        </button>
      </div>

      {/* image */}
      <div className="flex-1 w-full overflow-hidden rounded-lg">
        <img
          src={post.img}
          alt={post.caption}
          className="h-full w-full object-center object-cover"
        />
      </div>

      {/* caption */}
      <div className="w-full rounded-lg">
        <div className="flex justify-between items-center">
          <div className="flex gap-1.25">
            <Heart />
            <span>{post.react}</span>
            <MessageCircle />
            <span>{post.comments?.length ?? 0}</span>
          </div>

          <Bookmark />
        </div>
      </div>
      <p className="text-sm">{post.caption}</p>
    </div>
  );
};
export default PostCard;
