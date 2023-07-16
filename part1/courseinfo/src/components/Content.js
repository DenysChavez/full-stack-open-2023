import Part from "./Part";

const Content = (parts) => {
  let courses = parts.course.parts;
  return (
    <div>
      <Part part={courses[0]}></Part>
      <Part part={courses[1]}></Part>
      <Part part={courses[2]}></Part>
    </div>
  );
};
export default Content;