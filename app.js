const express = require('express'),
	  app 	  = express();

const { PORT = 3000 } = process.env;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/projects', (req, res) => {
	res.render('projects');
});

app.listen(PORT, () => {
	console.log(`Portfolio App listening on port ${PORT}`);
});