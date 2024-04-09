/* eslint-disable react/prop-types */
import { useState } from "react";
import Header from "./Componen/Header";
function App() {
  const students = ["Rephi", "Rephi", "Rere"];
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }
  return (
    <div>
      <Header name="rephi" />
      <ul>
        {students.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like{likes}</button>
    </div>
  );
}

export default App;
