var express = require('express');
var router = express.Router();
var beers = require('../controllers/beersController')

router.get('/', beers.index);
router.get('/new', beers.new);
router.get('/:id', beers.show);
router.post('/', beers.create);
router.post('/:id/bars', beers.addBar);
router.post('/:id/comments', beers.createComment);
router.delete('/:id', beers.destroy);

module.exports = router;