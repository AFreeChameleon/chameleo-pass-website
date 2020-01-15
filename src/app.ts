require('dotenv').config();
import express, { Application } from 'express';
import * as bodyParser from 'body-parser';
import path from 'path';
const app: Application = express();
const PORT: number = 3000;

//Setting up server
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')))

//Setting templating engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/views'));

//Routes
import { router as homeRouter } from './routes/homeRouter';
app.use('/', homeRouter);

//Server listening
app.listen(PORT, () => console.log('Home server running on port ' + PORT));
