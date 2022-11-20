const express = require('express');

const app = express();
const data7 = require("../Controller/home");


const dataRouter = express.Router();
dataRouter.route('/home').get(data7.homeData)

module.exports = dataRouter;