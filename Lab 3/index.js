const http = require("http");
// Import the Employee module
const EmployeeModule = require("./Employee");

console.log("Lab 03 - NodeJs");

// Define Server Port
const port = process.env.PORT || 8081;

// Create Web Server using CORE API
const server = http.createServer((req, res) => {
  if (req.method !== "GET") {
    res.writeHead(405, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ error: http.STATUS_CODES[405] }));
  }

  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    return res.end("<h1>Welcome to Lab Exercise 03</h1>");
  }

  if (req.url === "/employee") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(EmployeeModule.getAllEmployees()));
  }

  if (req.url === "/employee/names") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(EmployeeModule.getEmployeeNames()));
  }

  if (req.url === "/employee/totalsalary") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(EmployeeModule.getTotalSalary()));
  }

  // 404 Route for unhandled paths
  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: http.STATUS_CODES[404] }));
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
