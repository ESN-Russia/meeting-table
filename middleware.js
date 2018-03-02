const express = require("express"),
    router = require("./route"),
    ejs = require("ejs-mate"),
    path = require("path");

const configureServer = function(app) {
    app.set("port", process.env.PORT);
    app.set("env", process.env.NODE_ENV);

    app.engine("ejs", ejs);

    // Setting default engine for response rendering
    app.set("view engine", "ejs");
    // 'views' is not views folder but templates, so fuck my life
    app.set("views", "./templates/"); // so root folder for templates is set here

    // setting up static files
    app.use("/st", express.static(path.join(__dirname, "./public")));

    router(app);
};

module.exports = configureServer;
