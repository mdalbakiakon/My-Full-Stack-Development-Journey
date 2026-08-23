import React from "react";
import { Plus, Loader2 } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateEmp = () => {
  const navigate = useNavigate();
  const [preview, setPreview] = useState(null);
  const [image, setImage] = useState(null);
  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const [submitting, setSubmitting] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return; // prevent double-submit

    setSubmitting(true);

    const formData = new FormData();
    formData.append("empName", name.trim());
    formData.append("empAge", age);
    formData.append("empImage", image);

    try {
      const res = await axios.post(
        "http://localhost:3000/create-emp",
        formData,
      );
      console.log(res.data.message);
      navigate("/");
    } catch (error) {
      console.log(error);
      setSubmitting(false); // only reset on failure — success navigates away anyway
    }
  };

  const fileSelect = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  return (
    <div className="w-full flex justify-center item-center">
      <form
        onSubmit={handleSubmit}
        className="bg-neutral-300 rounded-3xl w-sm p-2.5 flex flex-col justify-center items-center gap-2.5 text-neutral-500 font-semibold"
      >
        <label
          htmlFor="img"
          className="w-full min-h-24 h-fit bg-white/40 rounded-2xl flex justify-center items-center hover:bg-white/20 overflow-hidden"
        >
          {preview ? (
            <img
              src={preview}
              alt=""
              className="w-full aspect-square object-center object-cover"
            />
          ) : (
            <Plus />
          )}
        </label>
        <input
          type="file"
          name="empImage"
          id="img"
          accept="image/*"
          className="hidden"
          onChange={fileSelect}
          disabled={submitting}
        />

        <input
          type="text"
          name="empName"
          value={name}
          id=""
          placeholder="Employee name"
          onChange={(e) => setName(e.target.value)}
          disabled={submitting}
          className="w-full bg-white/20 px-2.5 py-1.25 rounded-lg outline-none placeholder:text-neutral-400 disabled:opacity-50"
        />

        <input
          type="text"
          name="empAge"
          id=""
          value={age}
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder="Employee age"
          disabled={submitting}
          className="w-full bg-white/20 px-2.5 py-1.25 rounded-lg outline-none placeholder:text-neutral-400 scrollbar-hidden disabled:opacity-50"
          onChange={(e) => {
            const val = e.target.value.replace(/\D/g, "");
            setAge(val === "" ? "" : parseInt(val));
          }}
        />

        <button
          type="submit"
          disabled={submitting}
          className="px-2.5 py-0.5 rounded-lg bg-blue-500 text-white cursor-pointer disabled:bg-blue-300 disabled:cursor-not-allowed flex items-center justify-center gap-1.5 min-w-20"
        >
          {submitting ? (
            <>
              <Loader2 className="animate-spin" />
            </>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
};

export default CreateEmp;