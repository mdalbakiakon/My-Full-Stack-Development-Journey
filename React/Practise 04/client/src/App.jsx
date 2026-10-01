import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const formData = new FormData(e.currentTarget);
    console.log(formData);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    dddddddddddddddddddddddd
    try {
      setIsDisabled(true);
      const response = await axios.post("http://localhost:3000/", data);
      console.log(response);
    } catch (err) {
      console.log(err);
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setIsDisabled(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          pattern="^[a-z0-9._]+$"
          required
        />
        <input
          type="text"
          name="age"
          pattern="^[0-9]+$"
          required
        />
        <button disabled={isDisabled} type="submit">
          Submit
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};

export default App;