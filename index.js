// index.js
// Simple Node.js web server for "MyPage" (Lab 3 Task 4 update)

const http = require("http");
const port = 8000;

function renderPage() {
  const serverTime = new Date().toLocaleString("en-GB", { timeZone: "Europe/London" });
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Page – Jed Fernandez (Lab 3 Update)</title>
    <style>
      :root { --accent: #0066cc; --bg: #f9fbff; }
      body { font-family: Arial, sans-serif; margin: 2rem; background: var(--bg); line-height: 1.6; }
      .banner { background: white; border-left: 6px solid var(--accent); padding: 1rem; margin-bottom: 1.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.08); }
      h1, h2 { color: var(--accent); margin: 0.3rem 0; }
      footer { margin-top: 2rem; font-size: 0.95rem; opacity: 0.9; }
      code { background: #eef3f9; padding: 0 0.25rem; border-radius: 4px; }
    </style>
  </head>
  <body>
    <div class="banner">
      <h1>Welcome to MyPage — Lab 3 Deployment Update</h1>
      <p><strong>Server time:</strong> ${serverTime} (Europe/London) · <strong>Browser time:</strong> <span id="clientTime">loading…</span></p>
      <p><em>This visible change proves the code was updated locally, pushed to GitHub, and pulled to the VM.</em></p>
    </div>

    <h2>About Me</h2>
    <p>
      I'm a 2nd Year Creative Computing student at Goldsmiths University who enjoys coding,
      building games, and designing interactive visual projects.
    </p>

    <h2>Interests</h2>
    <p>
      I am an avid gamer, playing games of various genres from FPSs to RPGs. I have an additional keen interest
      in the creative process behind games—character/asset concepts and how they fit the world and story.
    </p>

    <footer>
      <p><strong>Change log:</strong> “Added banner + timestamps + light styling for Lab 3 Task 4”.</p>
      <p>Server listening on <code>http://localhost:${port}</code> (on VM it’s your public URL).</p>
    </footer>

    <script>
      // Fill browser time after page loads
      document.getElementById("clientTime").textContent = new Date().toLocaleString();
    </script>
  </body>
  </html>
  `;
}

http.createServer((req, res) => {
  console.log(new Date().toISOString(), req.method, req.url);
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(renderPage());
}).listen(port, () => {
  console.log(`MyPage server running at http://localhost:\${port}`);
});
