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
   async index(req, res){
        const users = await User.findAll();
        return res.status(200).json(users);
    };

    async show(req, res){
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(404).json({ error: "Usuario nao encontrado" });
      }
      return res.status(200).json(user);
    }

    async update(req, res){
      const {id} = req.params;
      const { nome, email } = req.body;

      await User.update({ nome, email }, { where: { id: id } });
      return res.status(200).json({ message: "Usuario atualizado com sucesso" });
    }
}

module.exports = new UserController();