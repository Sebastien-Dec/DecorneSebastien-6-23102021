const express = require('express');
const router = express.Router();

//To store the request file
const multer = require('../middleware/multer-config');
//Require user authentication
const auth = require('../middleware/authorize');
//Access middleware
const sauceCtrl = require('../controllers/sauce');

//Creating routes
router.post('/', auth, multer, sauceCtrl.createSauce);
router.post('/:id/like', auth, sauceCtrl.like);
router.get('/:id', auth, sauceCtrl.getOneSauce);
router.put('/:id', auth, multer, sauceCtrl.modifySauce);
router.delete('/:id', auth, sauceCtrl.deleteSauce);
router.get('/', auth, sauceCtrl.getAllSauce);

module.exports = router;