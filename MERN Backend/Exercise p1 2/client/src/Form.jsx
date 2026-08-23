import React from "react";
import { LoaderCircle, Plus } from "lucide-react";
import { useState } from "react";
import axios from "axios";

const Form = () => {
  const [preview, setPreview] = useState("");
  const [img, setImg] = useState("");
  const [author, setAuthor] = useState("");
  const [caption, setCaption] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);
      const formData = new FormData();
      formData.append("author", author);
      formData.append("caption", caption);
      formData.append("postImg", img);

      const res = await axios.post(
        "http://localhost:3000/create-post",
        formData,
      );
      console.log(res.data.message);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectImage = (e) => {
    const file = e.target.files[0];
    setImg(file);
    setPreview(URL.createObjectURL(file));
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="bg-[#111] w-sm rounded-3xl p-2.5 flex flex-col justify-center items-center gap-2.5 text-white font-semibold"
      >
        <input
          type="text"
          name="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          id=""
          className="w-full p-2.5 rounded-2xl bg-white/30 outline-none"
          placeholder="username"
        />

        <textarea
          type="text"
          name="caption"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          id=""
          className="w-full p-2.5 h-30 resize-none rounded-2xl bg-white/30 outline-none"
          placeholder="caption"
        />

        <label
          htmlFor="post-img"
          className="w-full min-h-24 h-fit rounded-2xl overflow-hidden flex justify-center items-center bg-white"
        >
          {preview ? (
            <img
              src={preview}
              alt=""
              className="w-full aspect-square object-center object-cover bg-white/50"
            />
          ) : (
            <Plus className="text-[#111]" />
          )}
        </label>
        <input
          type="file"
          name="postImg"
          id="post-img"
          onChange={selectImage}
          className="hidden"
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="px-4.5 py-1.5 bg-blue-500 rounded-lg disabled:opacity-60 disabled:cursor-default"
        >
          {isSubmitting ? <LoaderCircle className="animate-spin" /> : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Form;
