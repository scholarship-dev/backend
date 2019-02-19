// IMPORT NEEDED MODULES AND CONTROLLERS
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const authRouter = require('./routes/api/auth');
const requirementRouter = require('./routes/api/requirement');
require('./database/scholarboard-db');
const ethnicity_keywords = ["indigenous", "white peope", "African Americans", "Jewish People", "Asian people", "Arabs", "Native Americans", "Black people", "pacific islander", "Irannian people", "Native Hawaiians", "Alaska Natives", "Latino", "Multiracial", "Hispanic and Latino Americans", "Mexicans", "Pacific Islands Americans", "Irish People"]



// SETTING UP MIDDLEWARES
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.json());
server.use(bodyParser.json());


// MOUNTING ROUTES TO API PATH
// server.use('/api', indexRouter);
// server.use('/api', authRouter);
server.use(requirementRouter);
// server.use('/api', studentRouter);


// PORT
const port = 3000;
server.listen(port);

module.exports = server;
