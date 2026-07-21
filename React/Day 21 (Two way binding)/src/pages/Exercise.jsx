import React, { useState } from "react";

const Exercise = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`form submitted by ${username}`);
    setLoading(true);
    setUsername("");
    setPassword("");
    setError("");

    try {
      await new Promise((resolve) => {
        setTimeout(() => {
          console.log("sending api req");
          resolve();
        }, 5000);
      });
    } catch (err) {
      setError(err.message);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-dvh bg-[#050505] p-5">
      <form
        onSubmit={handleSubmit}
        className="text-white flex flex-col justify-center items-center gap-2.5 w-fit bg-white/5 p-5 rounded-2xl"
      >
        <label htmlFor="username" className="text-xl font-bold w-full">
          Enter Name
        </label>
        <input
          type="text"
          name="username"
          id="username"
          required
          autoComplete="username"
          value={username}
          onChange={(e) => setUsername(e.target.value.toUpperCase())}
          className="bg-white/10 p-2.5 rounded-lg outline-none"
        />

        <label htmlFor="password" className="text-xl font-bold w-full">
          Enter Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          required
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-white/10 p-2.5 rounded-lg outline-none"
        />

        {error && <p className="text-red-400 text-sm w-full">{error}</p>}

        <button
          disabled={loading}
          type="submit"
          className={`font-bold select-none px-4.5 py-1.5 rounded-full cursor-pointer text-lg ${
            loading ? "bg-amber-300 text-black" : "bg-red-500"
          }`}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Exercise;
