/*

Will define the top level application for react

*/

import College from "./components/College";
import Student from "./components/Student";
// import Employee from "./components/Employee";

const title = "React using Vite";
const titleStyle = { color: "teal" };
const courses = ["Javascript", "React", "Node.js"];

function App() {
  // This component returns one root element
  // but contains within it the children elements
  // instantiating College, Student, and Employee

  return (
    <article>
      <h1 style={titleStyle}>{title}</h1>
      <ul>
        {courses.map((course) => (
          <li key={course}>{course}</li>
        ))}
      </ul>
      <College name={"Ricardo"} city={"Vaughan"} />
      <Student firstname="Ricardo" lastname="Alvear" />
    </article>
  );
}

export default App;
