/*

Define the App component for the top level of the ReactDom render

*/

import { useState } from "react";
import Student from "./Student";
// TODO: import the functional and class components to
// render within App Student, LoginClass, LoginFunction

function App() {
  const [showStudent, setShowStudent] = useState();

  return (
    <section>
      <h1>Lab Exercise 8 - Week 10 - React Lifecycle</h1>
      <button onClick={(e) => setShowStudent(!showStudent)}>
        {showStudent ? "Hide" : "Show"} Student
      </button>

      {showStudent && <Student studentNumber="101536306" />}
    </section>
  );
}

export default App;
