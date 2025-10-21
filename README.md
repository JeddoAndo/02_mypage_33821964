# MyPage
A very small node.js web aplication and personal webpage developed as part of Dynamic Web Applications.

## Overview
**MyPage** is a self contained Node.js server that dynamically serves an HTML webpage. The project was created locally in VS Code, version-controlled through **Git and GitHub**, and deployed to a personal **Goldsmiths Virtual Machine (VM)** environment.

The application runs publicly from the departmental network and showcases:
- Basic web-server logic using the built in `http` module.
- Dynamic HTML generation using template literals.
- End-to-end version control: *local development → GitHub → VM deployment*.
- UTF-8 encoding, simple CSS styling, and embedded JavaScript.
- Demonstration of Git commits pushes, pulls, and VM synchronisation.

---

## Technologies & Tools Used

| Category | Technology / Tool | Purpose |
|-----------|------------------|----------|
| **Runtime** | [Node.js](https://nodejs.org/) | Server-side Javascript execution |
| **Version Control** | [Git](https://git-scm.com/) / [GitHub](https://github.com/) | Source control, collaboration, deployment pipeline |
| **Editor** | [Visual Studio Code](https://code.visualstudio.com/) | Development environment & integrated Git support |
| **Operating Systems** | Windows 11 (local) • Ubuntu VM (Server) | Local dev + production environments |
| **Deployment** | Goldsmiths Visual Server Manager | Hosted public server instance |
|** Package Manager** | npm / nvm | Manage Node.js installation & dependencies |

---

## Application Structure

02_mypage_33821964
│
├── index.js # Main Node.js script (creates HTTP server)
├── package.json # Basic package manifest
├── README.md # Project documentation (this file)
└── links.txt # Contains the public URL of the deployed VM

The app's generated HTML (within `index.js`) includes:
- A banner with server and browser timestamps
- "About Me" and "Interests" sections
- Inline CSS for layout and design
- A simple client-side script that shows live browser time

---

## Running the Application Locally

1. **Install Node.js**
2. **Clone the repository:**
    ```bash
    git clone https://github.com/JeddoAndo/02_mypage_33821964
    cd 02_mypage_33821964
3. **Run the server:**
    ```bash
    node index.js
4. **Open your browser and visit:**
    http://localhost:8000
You should see the updated MyPage banner and dynamically generated timestamps.

---

## Deployment to Virtual Machine

1. **Clone the repository on your VM**
    ```bash
    git clone https:https://github.com/JeddoAndo/02_mypage_33821964
    cd 02_mypage_33821964
2. **Start the application**
    ```bash
    node index.js
3. **Keep it running after logout (optional):**
    ```bash
    npm install forever -g
    forever start index.js
4. Access it publicly using:
http://doc.gold.ac.uk/usr/395/