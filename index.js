// rest api uptime monitoring

// dependencies
const http = require("http");

// app config
const app = {};

app.config = {
    port: 3000,
};

// create server
app.createServer = () => {
    const server = http.createServer(app.serverReqRes);
    server.listen(app.config.port, () => {
        console.log(`Server runs at port ${app.config.port}`);
    });
};

// handle req res
app.serverReqRes = (req, res) => {

    // response handle
    res.end("Server started");
};

app.createServer();
