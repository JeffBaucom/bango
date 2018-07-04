const BaseDeck = require('../models').BaseDeck;

module.exports = {
  create(req, res) {
    return BaseDeck
      .create({
        title: req.body.title,
        suffix: req.body.suffix
      })
      .then(basedeck => res.status(201).send(basedeck))
      .catch(error => res.status(400).send(error));
  },
};
