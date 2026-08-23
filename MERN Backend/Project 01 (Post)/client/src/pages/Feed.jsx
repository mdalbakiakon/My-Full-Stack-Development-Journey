import React, { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import axios from "axios";

const Feed = () => {
  const [postList, setPostList] = useState([]);

  const handlePostListFetch = async () => {
    const response = await axios.get("http://localhost:8080/feed");
    setPostList(response.data.feed);
  };

  useEffect(() => {
    handlePostListFetch();
  }, []);

  return (
    <section className="w-full max-w-7xl mx-auto grid grid-cols-4 gap-2.5">
      {postList.length > 0 &&
        postList.map((post) => <PostCard key={post._id} post={post} />)}
    </section>
  );
};

export default Feed;
