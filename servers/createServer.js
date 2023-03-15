const server = {
    directory: null,
    backup: null,
    verbose: false,
    headers: [],
    requestProcess: null,
    init: function (directory, verbose, callback) {
        console.log(directory, verbose, callback)
    },
    handle: function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.writeHead(200);
        res.end("OK");
    }
}

module.exports = function (path, silent, callBack) {
    server.init(path, silent, callBack);
    return server.handle;
}
