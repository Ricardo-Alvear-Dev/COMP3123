import logo from "./logo.svg";
import "./App.css";

function App() {

  const studentInfo = {
    studentId: "101536306",
    name: "Ricardo Alvear",
    college: "George Brown College, Toronto",
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>Welcome to Fullstack Development - I</h1>
        <h2>React JS Programming Week09 Lab exercise</h2>

        <h3>{studentInfo.studentId}</h3>
        <h3>{studentInfo.name}</h3>
        <p>{studentInfo.college}</p>
      </header>
    </div>
  );
}

export default App;
