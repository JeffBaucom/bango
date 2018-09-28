const decksController = require('../controllers').basedecks;
const cardsController = require('../controllers').cards;

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the Bango API',
    }));

    app.delete('/api/base_decks/:deckId', decksController.destroy);

    app.post(('/api/base_decks'), decksController.create);

    app.get(('/api/base_decks'), decksController.list);

    app.post(('/api/base_decks/:deckId/cards'), cardsController.create);

    app.post(('/api/base_decks/:deckId/cardsList'), cardsController.createAll);

    app.put('/api/base_decks/:deckId/cards/:cardId', cardsController.update);

    app.delete('/api/base_decks/:deckId/cards/:cardId', cardsController.destroy);
}
