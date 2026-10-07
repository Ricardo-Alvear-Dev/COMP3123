const express = require("express");
const fs = require("fs");

const routerUser = express.Router();

// Return all details from user.json
routerUser.get("/profile", (req, res, next) => {
  fs.readFile("./user.json", "utf8", (err, data) => {
    if (err) {
      return next(err);
    }

    res.type("json").send(data);
  });
});

// Login
routerUser.post("/login", (req, res, next) => {
  const { username, password } = req.body;

  fs.readFile("./user.json", "utf8", (err, data) => {
    if (err) {
      return next(err);
    }

    const user = JSON.parse(data);

    // Check username
    if (username !== user.username) {
      return res.json({
        status: false,
        message: "User Name is invalid",
      });
    }

    // Check password
    if (password !== user.password) {
      return res.json({
        status: false,
        message: "Password is invalid",
      });
    }

    // Username and password are valid
    res.json({
      status: true,
      message: "User Is valid",
    });
  });
});

// Logout
routerUser.get("/logout/:username", (req, res) => {
  const username = req.params.username;

  res.send(`<b>${username} successfully logged out.</b>`);
});

module.exports = routerUser;
