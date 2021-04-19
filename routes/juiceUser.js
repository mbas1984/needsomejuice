const path = require('path');

const express = require('express');

const juiceController = require('../controllers/juiceController');
const authController = require('../controllers/authController');


const router = express.Router();

router.get('/', juiceController.getIndex);

router.get('/casual', juiceController.getCasual);

router.get('/weightloss', juiceController.getWeightloss);

router.get('/athlete', juiceController.getAthlete);

router.get('/health', juiceController.getHealth);

router.get('/addJuice', juiceController.getaddJuice);
router.post('/addToDatabase', juiceController.postAddJuice);


router.get('/login', authController.getLogin);
router.post('/login', authController.postLogin);

router.get('/signup', authController.getSignup);
router.post('/signup', authController.postSignup);
router.post('/logout', authController.postLogout);





module.exports = router;