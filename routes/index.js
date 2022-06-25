const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');


/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", (req, res) => {
    Movie.find()
    .then((response) => {
        console.log(response)
        res.render("movies.hbs", {response})
    })
    .catch((error) => console.log(error));
})

router.get("/details/:id", (req, res) => {
    const id = req.params.id; // lo que esta por la url guardalo en variable const id
    Movie.findById(id)
    .then((movie) => {
        res.render("details", movie)
    })
    .catch((error) => console.log(error));
})
module.exports = router;
