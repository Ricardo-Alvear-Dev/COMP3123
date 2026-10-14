const express = require("express");
const booksRoutes = require("./routes/books");
const noteRoutes = require("./routes/NoteRoutes");
const { default: mongoose } = require("mongoose");
require("dotenv/config");

const app = express();

const SERVER_PORT = process.env.SERVER_PORT || 8081;

app.use(express.json());
app.use(express.urlencoded());

app.use("/api/v1", booksRoutes);
app.use("/api/v1", noteRoutes);

app.route("/").get((req, res) => {
  res.send("<h1>MogoDB + Mongoose Example</h1>");
});

const db = mongoose.connect(process.env.MONGO_URI);

if (db) console.log("Database connected");

app.listen(SERVER_PORT, () => {
  console.log(`Server running at http://localhost:${SERVER_PORT}/`);
});
