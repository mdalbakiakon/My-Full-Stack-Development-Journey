import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const PEXEL_API_KEY = import.meta.env.VITE_PEXELS_API_KEY;

  const getPhotos = async () => {
    try {
      setLoading(true);
      setError(null);
      const randomPage = Math.floor(Math.random() * 1000) + 1;

      const response = await axios.get(
        `https://api.pexels.com/v1/curated?per_page=80&page=${randomPage}`,
        {
          headers: {
            Authorization: PEXEL_API_KEY,
          },
        },
      );

      const prevPhotos = [...photos];
      const newPhotos = response.data.photos;
      setPhotos([...prevPhotos, ...newPhotos]);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch photos");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full min-h-dvh bg-black text-white p-2.5">
      <button
        id="get-pexels-image"
        aria-label="get-pexels-image"
        type="button"
        onClick={getPhotos}
        className="bg-red-500 p-2.5 font-bold rounded-xl mb-2.5"
      >
        get images
      </button>

      {loading && <p className="">Loading...</p>}
      {error && <p className="text-red-400">{error}</p>}

      <div className="w-full columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-2.5 mx-auto">
        {photos.map((photo) => (
          <img
            key={photo.id}
            src={photo.src.original}
            alt={photo.alt || "Pexels photo"}
            loading="lazy"
            decoding="async"
            className="w-full object-center object-cover rounded-2xl mb-2.5 break-inside-avoid"
          />
        ))}
      </div>
    </section>
  );
};

export default App;
