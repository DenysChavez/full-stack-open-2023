import { useState } from "react";

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClick, setAll] = useState([]);

  const handleLeftClick = () => {
    setAll(allClick.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClick.concat('R'))
    setRight(right + 1)
  }


  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>{ allClick.join(' ')}</p>
    </div>
  );
};

export default App;
