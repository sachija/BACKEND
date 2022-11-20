const express = require('express');

const app = express();
const data6= require("../Controller/home");


const dataRouter = express.Router();
dataRouter.route('/home').get(data6.homeData)

module.exports = dataRouter;
