const server = {
    init: function (directory) {
        console.log('server.init: ', directory)
    },
    handle: function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.writeHead(200);
        res.end(req.url);
    }
}

module.exports = function (path) {
    server.init(path);
    return server.handle;
}
