import React, { useState } from "react";
import { LoaderCircle } from "lucide-react";
import axios from "axios";

const App = () => {
  const [query, setQuery] = useState("");
  const [photoList, setPhotoList] = useState([]);
  const [loading, setLoading] = useState(false);
  const PEXEL_API_KEY = import.meta.env.VITE_PEXELS_API_KEY;

  // Preload a single image, resolves whether it succeeds or fails
  const preloadImage = (src) =>
    new Promise((resolve) => {
      const img = new Image();
      img.onload = resolve;
      img.onerror = resolve; // don't let one broken image hang the spinner forever
      img.src = src;
    });

  const searchPhoto = async (e) => {
    e.preventDefault();
    const cleanQuery = query.toLowerCase().trim();
    console.log(cleanQuery);
    if (!cleanQuery) return;

    setLoading(true);
    setPhotoList([]);

    try {
      const randomPage = Math.floor(Math.random() * 20) + 1;

      const response = await axios.get(
        `https://api.pexels.com/v1/search?query=${cleanQuery}&per_page=25&page=${randomPage}`,
        { headers: { Authorization: PEXEL_API_KEY } },
      );

      const photos = response.data.photos;

      await Promise.all(photos.map((p) => preloadImage(p.src.original)));

      setPhotoList(photos);
    } catch (error) {
      console.error("Pexels request failed:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#111] w-full min-h-dvh text-white p-2.5 flex flex-col">
      <form
        onSubmit={searchPhoto}
        className="flex justify-center items-center gap-2.5 my-15"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search photos..."
          className="px-2.5 py-1.5 outline-none bg-white/10 rounded-lg font-semibold text-white"
        />
        <button
          aria-label="get-data-btn"
          type="submit"
          className="text-white bg-[yellowgreen] font-semibold px-2.5 py-1.5 rounded-lg cursor-pointer"
        >
          get image
        </button>
      </form>

      {loading && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <LoaderCircle className="w-10 h-10 text-white animate-spin" />
        </div>
      )}

      {!loading && photoList.length > 0 && (
        <div className="columns-4 gap-2.5 mt-2.5 max-w-7xl mx-auto">
          {photoList.map((elem, idx) => (
            <img
              key={idx}
              src={elem.src.original}
              loading="lazy"
              alt=""
              className="w-full mb-2.5 break-inside-avoid rounded-2xl"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
