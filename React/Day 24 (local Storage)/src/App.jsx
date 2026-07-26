import React, { useEffect, useState } from "react";
import { imageList } from "./assets/image_dummy.js";

const App = () => {
  const [activateId, setActivateId] = useState(null);
  const [noteList, setNoteList] = useState(() => {
    const saved = localStorage.getItem("note-list");
    return saved ? JSON.parse(saved) : [];
  });
  const [noteTitle, setNoteTitle] = useState("");
  const [noteText, setNoteText] = useState("");

  useEffect(() => {
    const drafList = noteList;
    localStorage.setItem("note-list", JSON.stringify(drafList));
  }, [noteList]);

  const fallBackId = 0;

  const imageExpand = (id) => {
    setActivateId(id);
  };

  const imageNormal = () => {
    setActivateId(null);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    const newNoteList = [...noteList];
    const newNote = {
      title: noteTitle,
      text: noteText,
    };
    newNoteList.push(newNote);
    setNoteList(newNoteList);
    setNoteTitle("");
    setNoteText("");
  };

  return (
    <main className="w-full">
      {/* 1st container */}
      <section className="w-full h-dvh flex justify-center items-center bg-black">
        <div className="w-2/5 h-1/2 flex justify-center items-center gap-2.5 flex-nowrap">
          <div className="box bg-[url('https://images.unsplash.com/photo-1784570269737-21da4658a609?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center w-1/3 h-full hover:shrink-0 transition-all duration-300 ease-in-out rounded-4xl"></div>
          <div className="box bg-[url('https://i.pinimg.com/736x/03/78/1a/03781a240f77b370481a5441772b2dac.jpg')] bg-cover bg-center w-1/3 h-full hover:shrink-0 transition-all duration-300 ease-in-out rounded-4xl"></div>
          <div className="box bg-[url('https://i.pinimg.com/1200x/59/2f/6f/592f6fa6fad8a715f3c1c5b0d109ac59.jpg')] bg-cover bg-center w-1/3 h-full hover:shrink-0 transition-all duration-300 ease-in-out rounded-4xl"></div>
          <div className="box bg-[url('https://i.pinimg.com/1200x/e3/4f/41/e34f414b049da641ffa65cdb2430c164.jpg')] bg-cover bg-center w-1/3 h-full hover:shrink-0 transition-all duration-300 ease-in-out rounded-4xl"></div>
          <div className="box bg-[url('https://i.pinimg.com/736x/a8/2b/4d/a82b4d5c1c5be7510bdecfb626fe236a.jpg')] bg-cover bg-center w-1/3 h-full hover:shrink-0 transition-all duration-300 ease-in-out rounded-4xl"></div>
        </div>
      </section>

      {/* 2nd container */}
      <section className="w-full h-dvh flex flex-col justify-center items-center gap-5 bg-black p-5">
        <div>
          <h1
            style={{
              backgroundImage: `url(${imageList[activateId ?? fallBackId].url})`,
            }}
            className="text-9xl font-black leading-none uppercase bg-cover bg-center bg-clip-text text-transparent select-none"
          >
            PixFord
          </h1>
        </div>

        <div className="w-full max-w-5xl h-1/2 flex justify-center items-center gap-2.5 flex-nowrap">
          {imageList.map((elem, idx) => {
            return (
              <div
                key={elem.id}
                onMouseEnter={() => imageExpand(idx)}
                className={`w-1/3 h-full transition-all duration-300 ease-in-out rounded-4xl overflow-hidden cursor-pointer ${idx === activateId ? "shrink-0" : ""}`}
              >
                <img
                  src={elem.url}
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
            );
          })}
        </div>
      </section>

      {/* 3rd container */}
      <section className="bg-black w-full h-dvh flex justify-center items-center p-5">
        <form
          onSubmit={formSubmit}
          className="bg-red-500 p-5 rounded-4xl flex flex-col justify-center items-start gap-2.5 w-full max-w-5xl"
        >
          <input
            type="text"
            value={noteTitle}
            onChange={(e) => setNoteTitle(e.target.value)}
            placeholder="Enter Name"
            className="w-full p-2.5 outline-none border-2 border-black placeholder:text-black/50 rounded-2xl font-bold"
          />
          <textarea
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            placeholder="Enter note here"
            className="resize-none w-full h-75 p-2.5 outline-none border-2 border-black placeholder:text-black/50 rounded-2xl font-bold"
          ></textarea>

          <button
            type="submit"
            className="font-bold p-2.5 border-2 border-black self-center shadow-xl rounded-2xl cursor-pointer"
          >
            submit form
          </button>
        </form>
      </section>

      {/* 4th container */}
      <section className="w-full h-dvh bg-black flex justify-center items-center">
        <div className="w-full h-dvh bg-red-400 font-bold overflow-auto grid grid-cols-12 grid-rows-12">
          {noteList.map((elem, id) => {
            return (
              <span key={id} className="flex justify-center items-center">
                {noteList[id].title}
              </span>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default App;
