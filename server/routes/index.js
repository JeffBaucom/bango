const decksController = require('../controllers').basedecks;
const cardsController = require('../controllers').cards;

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the Bango API',
    }));

    app.post(('/api/base_decks'), decksController.create);

    app.post(('/api/cards'), cardsController.create);
}
