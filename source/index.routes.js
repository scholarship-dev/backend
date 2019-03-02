const express = require('express');

const scholarshipRoutes = require('./api-v2/scholarship/scholarship.route');
const userRoutes = require('./api-v2/user/user.route');
const authRouter = require('./api-v1/auth');

const router = express.Router();

module.exports = router;