const { createServer } = require("http");
const { createReadStream } = require("fs");

const sendFile = (res, status, type, filePath) => {
  res.writeHead(status, { "Content-Type": type });
  createReadStream(filePath).pipe(res);
};

createServer((req, res) => {
  switch (req.url) {
    case "/":
      return sendFile(res, 200, "text/html", "./home-page.html");
    case "/img/dhyannalinga.jpeg":
      return sendFile(res, 200, "image/jpeg", "./Dhyanalinga.jpeg");
    case "/styles.css":
      return sendFile(res, 200, "text/css", "./styles.css");
    default:
      return sendFile(res, 200, "text/html", "./404.html");
  }
}).listen(3001);

console.log("Bipul's personal website running on port 3001");
