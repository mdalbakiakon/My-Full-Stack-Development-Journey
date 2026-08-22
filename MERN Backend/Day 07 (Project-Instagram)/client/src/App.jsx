import React, { useEffect, useState } from "react";
import PostCard from "./components/PostCard";
import axios from "axios";

const App = () => {
  const [postList, setPostList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get("http://localhost:7000/post");
        setPostList(response.data.postList);
      } catch (err) {
        console.error("Failed to fetch posts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, []);

  return (
    <>
      {loading && <p>Loading...</p>}
      {!loading && postList.length === 0 && <p>No posts yet.</p>}

      <div className="w-fit mx-auto flex flex-col justify-start items-center gap-2.5">
        {postList.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </>
  );
};

export default App;
