const http = require('http');
const port = 3000;

http.createServer((req, res) => {
  res.write('Hello from DevOps project!');
  res.end();
}).listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
