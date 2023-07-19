import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setSelectedVote] = useState(Array(anecdotes.length).fill(0));
    const [highestVote, setHighestVote] = useState(0);
    const [highestAcoute, setHigestAcout] = useState('')
  // anecdote with the largest number of votes:
  // const [largestNum, setlargestNum ]
  const randomNumber = Math.floor(Math.random() * anecdotes.length);

  const handleVoteClick = () => {
    const newVotes = [...votes];
      newVotes[selected] += 1;
      setSelectedVote(newVotes);

      const max = Math.max(...newVotes); //looking for the highest number of the array
      setHighestVote(max);
      const indexMax = newVotes.indexOf(max); //look for the index of the largest number of votes
    //   setHighestVote(max);
      setHigestAcout(anecdotes[indexMax])
  };

    const handleNextAnecdote = () => {
    setSelected(randomNumber);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br />
      <p>Has {votes[selected]} votes</p>
      <br />
      <button onClick={handleVoteClick}>Vote</button>
      <button onClick={handleNextAnecdote}>Next Anecdote</button>
      <br />
          <h1>Anecdote with most votes</h1>
          <p>{ highestAcoute }</p>
          <p>Has { highestVote } Vote</p>
    </div>
  );
};

export default App;
