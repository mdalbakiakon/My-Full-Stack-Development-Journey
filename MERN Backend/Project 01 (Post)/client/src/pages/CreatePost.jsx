import { Plus } from "lucide-react";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [preview, setPreview] = useState(null);
  const [textArea, setTextArea] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const res = await axios.post("http://localhost:8080/create-post", formData);

    console.log(res);
    navigate("/");
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleTextChange = (e) => {
    setTextArea(e.target.value);
  };

  return (
    <div className="flex justify-center items-center w-full h-[calc(100svh-64px)]">
      <form
        onSubmit={handleSubmit}
        className="min-h-[30svh] h-fit w-xs bg-white/5 flex-col text-neutral-500 flex justify-between items-center rounded-3xl p-2.5 gap-2.5"
      >
        <label
          htmlFor="postImage"
          className="w-full h-fit rounded-2xl bg-white/5 flex justify-center items-center cursor-pointer overflow-hidden hover:bg-white/10 transition-colors"
        >
          {preview ? (
            <img
              src={preview}
              alt="Preview"
              className="w-full aspect-square object-cover object-center"
            />
          ) : (
            <Plus className="text-neutral-500 my-5" />
          )}
        </label>
        <input
          type="file"
          id="postImage"
          name="image"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />

        <textarea
          value={textArea}
          name="caption"
          onChange={handleTextChange}
          className="resize-none w-full flex-1 outline-none border border-white/5 p-2.5 rounded-xl text-sm"
          placeholder="Caption..."
        ></textarea>

        <button
          type="submit"
          className="bg-blue-500 text-sm font-semibold px-2.5 py-1 rounded-lg text-[#d3d3d3] cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
