import React, { useState, useRef, useEffect } from "react";
import { LoaderCircle } from "lucide-react";
import axios from "axios";
import Lenis from "lenis";

const Home = () => {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchedImageList, setSearchedImageList] = useState([]);
  const [newImageList, setNewImageList] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [error, setError] = useState(null);

  //   preloading image all from response
  const imagePreloader = (src) => {
    new Promise((resolve) => {
      const img = new Image();
      img.onload = resolve;
      img.onerror = resolve; //don't keep loading for a single error image in loading
      img.src = src.original;
    });
  };

  const PEXEL_API_KEY = import.meta.env.VITE_PEXEL_API_KEY;

  const scrollRef = useRef(null);
  const contentRef = useRef(null);
  const lastQueryRef = useRef("");
  const abortControllerRef = useRef(null);

  useEffect(() => {
    const wrapper = scrollRef.current;
    const content = contentRef.current;
    if (!wrapper || !content) return;

    const lenis = new Lenis({
      wrapper,
      content,
      orientation: "horizontal",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.2,
      touchMultiplier: 1.5,
    });

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [searchedImageList.length]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const query = value.toLowerCase().trim();
    if (!query || isLoading) return;

    if (!PEXEL_API_KEY) {
      setError("Missing Pexels API key — check your .env file.");
      return;
    }

    // cancel any in-flight request so an old response can't overwrite a new one
    abortControllerRef.current?.abort();
    const controller = new AbortController();
    abortControllerRef.current = controller;

    setIsLoading(true);
    setHasSearched(true);
    setError(null);

    const isSameQuery = query === lastQueryRef.current;
    // pick a new random page every time, so "search again" actually returns fresh results
    const page = Math.floor(Math.random() * 50 + 1);

    try {
      const response = await axios.get(
        `https://api.pexels.com/v1/search?query=${query}&per_page=25&page=${page}`,
        {
          headers: { Authorization: PEXEL_API_KEY },
          signal: controller.signal,
        },
      );

      const photos = response.data.photos;
      await Promise.all(photos.map((p) => imagePreloader(p.src)));

      if (isSameQuery) {
        setNewImageList((prev) => [...photos, ...prev]);
      } else {
        setNewImageList(photos);
      }

      setSearchedImageList((prev) => [...photos, ...prev]);
    } catch (err) {
      if (axios.isCancel(err)) return; // ignore aborted requests
      console.error(err.message);
      setNewImageList([]); // don't show stale results after a failure
      setError(
        err.response?.status === 401
          ? "Invalid Pexels API key."
          : "Something went wrong fetching images. Try again.",
      );
    } finally {
      setIsLoading(false);
      lastQueryRef.current = query;
    }
  };

  return (
    <section className="w-full min-h-[calc(100dvh-132px)] px-5 pb-7.5 flex flex-col justify-center items-center relative">
      <form
        onSubmit={handleSubmit}
        className="sticky top-7.5 flex bg-zinc-800 rounded-lg justify-center items-center gap-2.5 h-10 z-50 shadow-xl p-0.5 text-white"
      >
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search image"
          className="h-full outline-none rounded-lg border-2 border-zinc-800 px-2.5"
        />
        <button
          aria-label="search-photo-btn"
          type="submit"
          disabled={isLoading}
          className="bg-[yellowgreen] px-2.5 rounded-lg text-white font-semibold cursor-pointer h-full disabled:opacity-60 disabled:cursor-not-allowed"
        >
          Search
        </button>
      </form>

      <div className="w-full flex-1 mt-10 relative flex flex-col justify-center items-center gap-7.5">
        <div className="w-full flex-1 max-w-7xl mx-auto columns-4 gap-2.5">
          {isLoading ? (
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-white">
              <LoaderCircle className="text-white w-12 animate-spin" />
            </div>
          ) : error ? (
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-red-400">
              {error}
            </div>
          ) : newImageList.length > 0 ? (
            newImageList.map((elem, idx) => (
              <img
                key={elem.id ?? idx}
                src={elem.src.original}
                alt={elem.alt}
                loading="lazy"
                className="mb-2.5 rounded-xl break-inside-avoid"
              />
            ))
          ) : hasSearched ? (
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-white">
              No Image found...
            </div>
          ) : (
            ""
          )}
        </div>

        {searchedImageList.length > 0 && (
          <div className="w-full flex flex-col items-center gap-2.5 mt-7.5">
            <h2 className="text-white font-semibold text-left w-full max-w-7xl mx-auto text-4xl">
              Recent Search
            </h2>
            <div
              ref={scrollRef}
              className="w-full max-w-7xl mx-auto overflow-x-auto hor-scroll pb-2"
            >
              <div ref={contentRef} className="flex gap-2.5 w-max">
                {searchedImageList.map((elem, idx) => (
                  <img
                    key={`${elem.id ?? idx}-${idx}`}
                    src={elem.src.tiny}
                    alt={elem.alt}
                    loading="lazy"
                    className="w-50 aspect-square object-cover rounded-lg shrink-0"
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
