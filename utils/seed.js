const connection = require('./../config/connection');
const {User, Thought} = require('./../models');
//const { userData, thoughtData } = require('./data');
const { getRandomUserName, getRandomEmail, getRandomThoughts, getRandomArrItem} = require("./data");


connection.once("open", async () => {
  await User.deleteMany({});
  await Thought.deleteMany({});

  const users = [];
  const thoughts = []

  for (let i = 0; i < 10; i++) {
    const userName = getRandomUserName();
    const email = getRandomUserName()+"@orgorg.org";
    const thoughts = getRandomThoughts(5);
    await users.push(
      {
	userName,
	email,
	thoughts
      });
  }

  

  await User.collection.insertMany(users);
  
  console.log("Seeding is complete");
  process.exit(0);
  
});
