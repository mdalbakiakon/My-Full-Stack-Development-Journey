import React from "react";
import { useState } from "react";
import axios from "axios";

const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('form is submitted!')
    console.log(name)
    console.log(age)
    console.log(typeof age)

    const data = {
      name: name,
      age: age
    }

    try {
      const respose = await axios.post('http://localhost:3000/', data);
      console.log(respose);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id=""
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="date"
          name="age"
          id=""
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button type="submit">Submit form</button>
      </form>
    </div>
  );
};

export default App;
