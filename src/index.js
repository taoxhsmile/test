const http = require("http");

// 测试1

const server = http.createServer((req, res) => {
  res.end("test");
});

server.listen(3001);
