const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const comments = require("../models/comments");
const blogs = require("../models/blog");
router.get("/", (req, res) => {
  res.send(
    `<h1 class='text-center'>This is the Root Directory , To display all the Blogs <a href="/blogs">Click Here</a> or route to "/blogs/"</h1>`
  );
});
router.get("/blogs", async (req, res) => {
  const dataobj = await blogs.find({});
  console.log(dataobj);
  console.log("Data Found...");
  res.render("home", { dataobj });
});
router.get("/blogs/new", (req, res) => {
  res.render("new");
});
router.get("/blogs/:id", async (req, res) => {
  const { id } = req.params;
  const data = await blogs.findById(id).populate("comments");
  res.render("item", { data });
});

router.post("/blogs/new", async (req, res) => {
  const data = req.body;
  console.log(data);
  data.date = Date.now();
  await blogs.create(data);
  console.log("Blog Created and stored in Database...");
  res.redirect("/blogs");
});
router.get("/blogs/:id/edit", async (req, res) => {
  const { id } = req.params;

  try {
    const data = await blogs.findById(id);
    res.render("edit", { data });
  } catch (e) {
    console.log("Data with ID not FOUND");
  }
});
router.patch("/blogs/:id/edit", async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  await blogs.findByIdAndUpdate(id, data);
  console.log("Data updated...");
  res.redirect(`/blogs/${id}/`);
});
router.delete("/blogs/:id/delete", async (req, res) => {
  const { id } = req.params;
  const data = await blogs.findById(id);
  console.log("THIS IS DELETE ROUTE");
  if (data.comments.length > 0) {
    for (item of data.comments) {
      await comments.findByIdAndDelete(item);
    }
  }
  console.log("Comments Deleted");
  await blogs.findByIdAndDelete(id);
  console.log("Data Deleted...");
  res.redirect(`/blogs`);
});
router.post("/blogs/:id/comments", async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  data.date = Date.now();
  console.log("This is the Data...");
  console.log(data);
  const blogItem = await blogs.findById(id);
  const commentObj = new comments(data);
  blogItem.comments.push(commentObj);
  console.log(blogItem.comments);
  await blogItem.save();
  await commentObj.save();
  res.redirect(`/blogs/${id}`);
});

module.exports = router;
