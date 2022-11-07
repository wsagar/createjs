import { useEffect } from "react";
import { useState } from "react";

export default function Chats() {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    if (count >= 1) {
      document.title = `Chats(${count})`;
    } else {
      document.title = "Chats";
    }
  });

  return (
    <>
      <div className="maindiv">
        <span id="content">
          <p className="text">{count}</p>
          <button onClick={updateCount}>CLickhere</button>
        </span>
      </div>
    </>
  );
}
