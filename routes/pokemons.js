var router = require('express').Router();

var Pokemon = require('./../models/Pokemon');

/* je recherche tous les pokémons dans la base de données */
router.get('/', (req, res) => {
    Pokemon.find({}).populate('types').then(pokemons => { // on récupère tous les pokémons avec leurs types
        res.render('pokemons/index.html', {pokemons: pokemons});
    });
});

module.exports = router;