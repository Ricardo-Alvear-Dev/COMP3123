/*
    Purpose: Express framework with Node.js
    - Try GET, POST, PUT, DELETE methods
    - use routes instead of pure paths - like an API in your own software's backend
    - Compare and contrast Get query vs params
*/

const express = require("express");
const app = express();

const SERVER_PORT = process.env.PORT || 3000;

// ------ Middleware setup for each of our needs of the web server

// Middleware setup for each of our needs on the web server
// Serving static files
// Notice there is no real folder in our filesystem called static
// But this will be path we can access in the URL
app.use("/static", express.static("public"));

// Serving JSON
app.use(express.json());

// Serving traditional HTML body
// if we add the object parameter with property extended: true
// we can use the library as instead of library querystring
app.use(express.urlencoded({ extended: true }));

// ---------------------------------

// http://localhost:3000
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the root path of the server</h1>");
});

app.get("/hello", (req, res) => {
  res.status(200).send("<h1>Welcome to the path of /hello/</h1>");
});

app.get("/college", (req, res) => {
  const college = {
    method: "GET", // This was not anything built in, we created this property
    name: "George Brown College",
    location: "Toronto",
    established: 1957,
  };

  res.json(college);
});

app.get("/students/:name/:age/:city", (req, res) => {
  console.log(req.params);
  if (!req.params.name || !req.params.age || !req.params.city)
    return res.status(400).json({ error: "Missing path parameters" });

  const name = req.params.name;
  const age = req.params.age;
  const city = req.params.city;

  res.json({ student_name: name, student_age: age, student_city: city });
});

app.post("/college", (req, res) => {
  const college = {
    method: "POST", // This was not anything built in, we created this property
    name: "George Brown College",
    location: "Toronto",
    established: 1957,
  };

  res.json(college);
});

app.put("/college", (req, res) => {
  const college = {
    method: "PUT", // This was not anything built in, we created this property
    name: "George Brown College",
    location: "Toronto",
    established: 1957,
  };

  res.json(college);
});

app.delete("/college", (req, res) => {
  const college = {
    method: "DELETE", // This was not anything built in, we created this property
    name: "George Brown College",
    location: "Toronto",
    established: 1957,
  };

  res.json(college);
});

app.listen(SERVER_PORT, () => {
  console.log(`Server is running on http://localhost:${SERVER_PORT}`);
});
