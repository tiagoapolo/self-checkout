const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./router');

const app = express();
const port = process.env.PORT || 8888;

app.use(express.static('public'));
app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes)

//Serves all the request which includes /images in the url from images folder
app.use('/images', express.static(__dirname + '/public/images'));

app.listen(port, () => console.log(`Server running at ${port}!`));