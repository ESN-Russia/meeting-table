//var googledoc = require("./googledoc");

module.exports = app => {
    app.get("/", (req, res) => {
        res.render("main");
    });
    app.get("/master", (req, res) => {
        res.render("master");
    });
    /*  app.get("/doc", (req, res) => {
        res.send("OK");
        googledoc();
    });

    app.get("/print_doc", googledoc.getFile);*/

    app.get("*", (req, res) => {
        res.send("ok");
    });
};
