const Card = require('../models').Card;

module.exports = {
  create(req, res) {
    return Card
      .create({
        translation: req.body.translation,
        deckId: req.params.deckId,
        cardNumber: req.body.cardNumber
      })
      .then(card => res.status(201).send(card))
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return Card
      .find({
        where: {
          id: req.params.cardId,
          deckId: req.params.deckId,
        }
      })
      .then(card => {
        if (!card) {
          return res.status(404).send({
            message: 'Card Not Found',
          });
        }

        return card
          .update({
            translation: req.body.translation || card.translation,
            cardNumber: req.body.cardNumber || card.cardNumber,
          })
          .then(updatedTodoItem => res.status(200).send(updatedTodoItem))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
  destroy(req, res) {
    return Card
      .find({
        where: {
          deckId: req.params.deckId,
          id: req.params.cardId
        },
      })
      .then(card => {
        if (!card) {
          return res.status(404).send({
            message: 'Card Not Found',
          });
        }
        return card
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};
