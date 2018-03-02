require("dotenv").config();

const express = require("express"),
    app = express(),
    middleware = require("./middleware")(app, express),
    http = require("http").Server(app),
    io = require("socket.io")(http),
    socket = require("./socket")(io);

http.listen(app.get("port"), function() {
    console.log("Server has started at port " + app.get("port"));
});
