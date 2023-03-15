const http = require("http");
const yaml = require("js-yaml");
const fs = require("fs");
const path = require("path");
const server = require("./server");

const args = process.argv.slice(2);
let port;
let host;

try {
    const config = yaml.load(fs.readFileSync(path.resolve(__dirname + "/config.yaml"), "utf-8"));
    let moduleName = args[0];
    port = config["port"]["develop"];
    host = config["host"]["develop"];
    if (moduleName !== null) {
        if (moduleName in config["port"]) {
            port = config["port"][moduleName];
            host = config["host"][moduleName];
        } else {
            console.log("Server not suport " + moduleName + " ...");
        }
    }
    console.log("moduleName: ", moduleName);
    console.log("port: ", port, "host: ", host);

    http.createServer(server(path.resolve('./data'))).listen(port, host);
    console.log(`Server [${moduleName}] started on port with ${host}:${port} ...`);
    
} catch (err) {
    throw new Error(err);
}