import React, { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const inputUsername = (e) => {
    setUsername(e.target.value);
  };

  const inputPassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="h-dvh w-full bg-black text-white flex justify-center items-center">
      <div>
        <form className="flex flex-col justify-center items-center gap-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={inputUsername}
            required
            autoComplete="username"
            className="bg-white/5 px-3.5 py-2.5 rounded-xl outline-none text-lg font-bold placeholder:text-white/10"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={inputPassword}
            required
            autoComplete="current-password"
            className="bg-white/5 px-3.5 py-2.5 rounded-xl outline-none text-lg font-bold placeholder:text-white/10"
          />
          <button
            type="submit"
            className="bg-red-500 font-bold select-none px-4.5 py-1.5 rounded-full cursor-pointer text-lg"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
