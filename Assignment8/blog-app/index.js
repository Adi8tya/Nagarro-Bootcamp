const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const app = express();
const blogRoutes = require("./routes/blogRoute");
const seed = require("./seed");
mongoose
  .connect("mongodb://localhost:27017/blogApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Connection to database was successull");
  })
  .catch(() => {
    console.log("Connection to database failed!!!");
  });
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(blogRoutes);
//seed();
app.listen(3000, () => {
  console.log("Listening to port  3000");
});
