import Part from "./Part";
import Total from "./Total";

const Content = ({ parts }) => {

  return (
    <>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
          <Total exercises={parts}/>
    </>
  );
};

export default Content;
