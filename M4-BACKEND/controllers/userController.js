const { User } = require('../models');

class UserController {
  async store(req, res) {
    try {
      const { nome, email } = req.body;

      if (!nome || !email) {
        return res.status(400).json({ error: "nome e email sao obrigatorios" });
      }

      const createdUser = await User.create({ nome, email });
      return res.status(201).json(createdUser);
    } catch (error) {
      return res.status(500).json({ error: "erro ao criar usuario" });
    }
  }
}

module.exports = new UserController();
