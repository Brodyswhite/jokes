const JokesController = require('../controllers/jokes.controller');
const Jokes = require('../models/jokes.model');

module.exports = (app) => {
    app.get('/api/jokes',JokesController.index);

    app.post('/api/jokes/create',JokesController.create);

    app.get('/api/jokes/:id',JokesController.show);

    app.put('/api/update/:id',JokesController.update);
}