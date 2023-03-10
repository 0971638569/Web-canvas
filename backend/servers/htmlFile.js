const http = require("http");
const fs = require('fs').promises;

const host = "localhost";
const port = 8000;

let indexFile;

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(indexFile);
};

const server = http.createServer(requestListener);
fs.readFile(__dirname + "/modules/index.html")
    .then(content => {
        indexFile = content;
        server.listen(port, host, () => {
            console.log(`Server is running on http://${host}:${port}`);
        });
    })
    .catch(err => {
        console.error(`Could not read index.html file: ${err}`)
        res.writeHead(500);
        res.end(err);
        process.exit(1);
    });