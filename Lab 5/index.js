const express = require("express");
const app = express();

const userRouter = require("./routes/users");

// Middleware to read JSON request bodies
app.use(express.json());

// Add User Router
app.use("/api/v1/user", userRouter);


// Home page
app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/home.html");
});


// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).send("Server Error");
});

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
  console.log("Web Server is listening at port " + PORT);
});
