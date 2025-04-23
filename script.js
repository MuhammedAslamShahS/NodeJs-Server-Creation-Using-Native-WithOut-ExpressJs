const http = require("http");
const fs = require("fs");
const path = require("path");

const Server = http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile(path.join(__dirname, "views", "index.html"), "utf-8", (err, data) => {
            if (err) throw err;

            res.writeHead(200, { "content-type": "text/html" });
            res.end(data);
        });
    }
    
});

const PORT = process.env.PORT || 3001;

Server.listen(PORT, () => console.log(`Server running on ${PORT}`));
