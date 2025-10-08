// index.js
// Simple Node.js web server for "MyPage"
// Basic framework for now || test comment

const http = require("http");
const port = 8000;

const myPageHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Page – Jed Fernandez</title>
</head>
<body style="font-family: Arial, sans-serif; margin: 2em;">
  <h1>Hello, I'm Jed Fernandez!</h1>
  <h2>About Me</h2>
  <p>
    I'm a 2nd Year Creative Computing student at Goldsmiths University who enjoys coding,
    building games, and designing interactive visual projects.
  </p>
  <h2>Interests</h2>
  <p>
    I am an avid gamer, playing games of various genres from FPSs to RPGs. I have an additional keen interest
    the creative process that goes into producing games like looking into the character and asset concepts, how it all
    fits into the overall environment and story of the game.
  </p>
</body>
</html>
`;

http.createServer((req, res) => {
    console.log(req);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(myPageHTML);
}).listen(port, () => {
  console.log(`MyPage server running at http://localhost:${port}`);
});
