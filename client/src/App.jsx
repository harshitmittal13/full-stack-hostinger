import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://full-stack-hostinger-805b.onrender.com/api/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <>
      <h1>Welcome to Harshit's Frontend</h1>
      <h2>{message}</h2>
    </>
  );
}

export default App;
