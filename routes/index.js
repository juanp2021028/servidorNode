const express  = require('express');
const router = express.Router();

const pay = require('../controllers/pay.controller')

module.exports = function function_name(argument) 
{
	router.get('/pay',pay.generarToken);

	return router;
}