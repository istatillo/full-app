const { Router } = require("express");
const User = require("../model/User");

const router = Router();

router.get("/", async (req, res) => {
  const users = await User.find({});
  res.status(200);
  res.send(users);
});

router.post("/", async (req, res) => {
  const { name, age } = req.body;
  await User.create({ name, age });
  res.status(201);
  res.send("Malumot saqlandi!");
});

router.delete("/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.status(200);
  res.send("O'chirildi!");
});

router.put("/", async (req, res) => {
  const { name, age, id } = req.body;

  await User.findByIdAndUpdate(id, { name, age });
  res.status(205);
  res.send("O'zgartirildi!");
});

module.exports = router;
