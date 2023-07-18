import { useState } from 'react';
import Title from './Components/Title';
import Button from './Components/Button';
import Statistics from './Components/Statistics';

const App = () => {
  // save clicks of each button to its own state
  const [clicks, setClicks] = useState({
    good: 0, neutral: 0, bad: 0
  })

  const handleGoodClick = () => setClicks({ ...clicks, good: clicks.good + 1 });

  const handleNeutralClick = () => setClicks({ ...clicks, neutral: clicks.neutral + 1 });

  const handleBadClick = () => setClicks({ ...clicks, bad: clicks.bad + 1 });

  return (
    <div>
      <Title text={'Give Feedback'} />

      <Button handlerClick={handleGoodClick} text={'good'} />
      <Button handlerClick={handleNeutralClick} text={'neutral'}/>
      <Button handlerClick={handleBadClick} text={'bad'} />
      
      <Title text={'Statistics'} />

      <Statistics good={clicks.good} neutral={clicks.neutral} bad={ clicks.bad} />

    </div>
  )
}

export default App