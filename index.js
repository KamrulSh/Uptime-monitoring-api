// rest api uptime monitoring

// dependencies
const http = require("http");
const url = require("url");
const { StringDecoder } = require("string_decoder");

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
    // request handle
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimedPath = path.replace(/^\/+|\/+$/g, "");
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    const headersObject = req.headers;
    const decoder = new StringDecoder("utf-8");
    let realData = "";
    req.on("data", (buffer) => {
        realData += decoder.write(buffer);
    });

    req.on("end", () => {
        realData += decoder.end();
        console.log(realData);
    });
    console.log(headersObject);

    // response handle
    res.end("Server started");
};

app.createServer();
