import { useState } from "react";
import Title from "./Components/Title";
import Button from "./Components/Button";
import Statistics from "./Components/Statistics";

const App = () => {
  // save clicks of each button to its own state
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleGoodClick = () => setClicks({ ...clicks, good: clicks.good + 1 });

  const handleNeutralClick = () =>
    setClicks({ ...clicks, neutral: clicks.neutral + 1 });

  const handleBadClick = () => setClicks({ ...clicks, bad: clicks.bad + 1 });

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>
              <Title text={"Give Feedback"} />
            </th>
          </tr>
        </thead>
      </table>

      <table>
        <tbody>
          <tr>
            <td>
              <Button handlerClick={handleGoodClick} text={"good"} />
            </td>
            <td>
              <Button handlerClick={handleNeutralClick} text={"neutral"} />
            </td>
            <td>
              <Button handlerClick={handleBadClick} text={"bad"} />
            </td>
          </tr>
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th>
              <Title text={"Statistics"} />
            </th>
          </tr>
        </thead>
      </table>

      <table>
        <tbody>
          <tr>
            <td>
              <Statistics
                good={clicks.good}
                neutral={clicks.neutral}
                bad={clicks.bad}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default App;
