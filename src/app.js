const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

//public static path////
const staticPath = path.join(__dirname, "../public");
app.set("view engine", "hbs");
app.use(express.static(staticPath));

const hbs_path = path.join(__dirname, "../templates/partials");
const template_path = path.join(__dirname, "../templates/views");

app.set("views", template_path);
hbs.registerPartials(hbs_path);

//Routing....
app.get("/", (req, res) => res.render("index"));
app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/weather", (req, res) => {
  res.render("weather");
});
app.get("*", (req, res) => {
  res.render("404err");
});

module.exports = app;
