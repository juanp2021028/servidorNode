var fs = require('fs');
var path = require('path');

exports.generarToken = async (req, res)=>{

	return res.status(200).send({
		status : 'success',
		message: 'Generando Token'

	})
}