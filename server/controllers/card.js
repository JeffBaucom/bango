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
};
