const express = require("express");
const app = express();

app.use(express.json());

// Serve static files from the /public directory
app.use(express.static("public"));

// GET /hello - Returns plain text "Hello Express JS"
app.get("/hello", (req, res) => {
  res.type("text/plain").send("Hello Express JS");
});

// GET /user - Query parameters with defaults
app.get("/user", (req, res) => {
  const firstname = req.query.firstname || "Ricardo";
  const lastname = req.query.lastname || "Alvear";
  res.json({ firstname, lastname });
});

// POST /user/:firstname/:lastname - Path parameters
app.post("/user/:firstname/:lastname", (req, res) => {
  const { firstname, lastname } = req.params;
  res.json({ firstname, lastname });
});

// POST /users - Accepts JSON array of user objects
app.post("/users", (req, res) => {
  const users = Array.isArray(req.body) ? req.body : [];
  res.json(users);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
