const { Router } = require("express");
const UserController = require("../controllers/userController");

const routes = Router();

routes.get("/", (req, res) => {
  return res.status(200).json({ message: "Server on" });
});

routes.post("/user", UserController.store);

module.exports = routes;
