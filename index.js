const http = require("http");
const fs = require("fs");
const path = require('path');

const server = http.createServer((req,res)=>{

    const requestedPage = req.url === '/' ? "index.html" : `${req.url}.html`;
    
    const filePath = path.join(__dirname, "views", requestedPage);

    fs.readFile(filePath, "utf-8", (err, data)=>{


        if (err) {
            fs.readFile(path.join(__dirname, "views", "error404.html"), "utf-8", (err404, errorPage) => {
                
                res.writeHead(404, {"content-type": "text/html"});
                res.end(err404 ? "<h1>404 Not Found</h1>" : errorPage);
            });
        }else{
            res.writeHead(200, {"content-type": "text/html"});
            res.end(data);
        }

       


    });


});


const PORT = process.env.PORT || 3001;

server.listen(PORT, ()=> console.log(`Server running... on ${PORT}`));