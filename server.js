const http = require("http");
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Creating web server</title>
    </head>
    <body>
      <h1>Hello World</h1>
    </body>
    </html>
    `);
  })
  .listen(3000);

console.log("Web server is listening on Port 3000");
