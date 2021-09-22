const express  = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use((req, res, next)=>{
	res.header('Access-Control-Allow-Origin','*');
	res.header('Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
	res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,DELETE');
	res.header('Allow','GET,POST,OPTIONS,PUT,DELETE');
	next();
})

app.use('/api/pay',routes());

app.listen(3000);


