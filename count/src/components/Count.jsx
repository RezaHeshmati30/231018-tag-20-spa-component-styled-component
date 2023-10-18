import React, { useState } from "react";
import "../App.css";

const Count = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h3>{count}</h3>
      <button onClick={() => setCount((count) => count + 1)}>Click</button>
    </>
  );
};

export default Count;
