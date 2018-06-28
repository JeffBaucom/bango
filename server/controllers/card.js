const Card = require('../models').Card;

module.exports = {
  create(req, res) {
    return Card
      .create({
        translation: req.body.translation,
        deckId: req.params.todoId,
      })
      .then(todoItem => res.status(201).send(todoItem))
      .catch(error => res.status(400).send(error));
  },
};
