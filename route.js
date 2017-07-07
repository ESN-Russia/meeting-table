module.exports = (app) => {
    app.get("/", (req, res) => {
        res.render("main");
    });
    app.get("/master", (req, res) => {
        res.render("master");
    });
};
