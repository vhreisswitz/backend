const { Router } = require("express");
const UserController = require("../controllers/userController");

const routes = Router();

routes.get("/", (req, res) => {
  return res.status(200).json({ message: "Server on" });
});

routes.post("/user", UserController.store);
routes.get("/user", UserController.index);
routes.get("/user/:id", UserController.show);
routes.put("/user/:id", UserController.update);
module.exports = routes;