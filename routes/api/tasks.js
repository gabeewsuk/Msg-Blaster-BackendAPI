const express = require("express");

const router = express.Router();

//Item Model

const Task = require("../../models/Tasks");

// @route GET api/items
// @description Get All Items
// @access Public

router.get("/", (req, res) => {
  Task.find()
    .sort({ date: 1 })
    .then((tasks) => res.json(tasks));
});

// @route POST api/items
// @description Create An Item
// @access Public

router.post("/", (req, res) => {
  console.log("here we are")
  const newTask = new Task({
    text: req.body.text,
    id: req.body.id,
    ID: req.body.ID,

  });
  newTask.save().then((task) => res.json(task));
});

// @route DELETE api/items/:id
// @description Delete An Item
// @access Public

router.delete("/:id", (req, res) => {
  Task.findById(req.params.id)
    .then((item) => item.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;

/*
const express = require("express");

const router = express.Router();

//Item Model

const Task = require("../../models/Tasks");

// @route GET api/items
// @description Get All Items
// @access Public

router.get("/", (req, res) => {
  Task.find()
    .sort({ id: 1 })
    .then((tasks) => res.json(tasks));
});

// @route POST api/items
// @description Create An Item
// @access Public

router.post("/", (req, res) => {
  console.log("here we are")
  const newTasks = new Task({
    text: req.body.text,
    ID: req.body.ID,
    id: req.body.id

  });
  newTasks.save().then((task) => res.json(task));
});

// @route DELETE api/items/:id
// @description Delete An Item
// @access Public

router.delete("/:ID", (req, res) => {
  Item.findOneAndDelete({ID: 1}).then((item)=>console.log(item))
    //.then((item) => item.remove()
    //.then(() => res.json({ success: true }))
    .catch((err) => console.log(err), res.status(404).json({ success: false }));
});

module.exports = router;
*/