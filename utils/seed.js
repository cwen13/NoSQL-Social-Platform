const connection = require('../config/connection');
const {User, Thought} = require('../models');
const { userData, thoughtData } = require('./data');

connnection.on("error", (err) => err);;

conneciton.once("open", async
