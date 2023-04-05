const connection = require('./../config/connection');
const {User, Thought} = require('./../models');
//const { userData, thoughtData } = require('./data');
const { getRandomUserName, getRandomEmail, getRandomThought} = require("./data");


connection.once("open", async () => {
  await User.deleteMany({});

  const users = [];

  for (let i = 0; i < 10; i++) {
    const email = getRandomEmail();
    const userName = getRandomUserName();
    const newUser = {
      userName,
      email
    };
    users.push(newUser);
  }

  const thoughts = [];
  
  for (let i = 0; i < users.length; i++) {
    const userName = users[i]["name"];
    const thoughtText = getRandomThought();
    const newThought = {
      thoughtText,
      userName
    };
    thoughts.push(newThought);
  }

  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);

  console.table(users);
  console.table(thoughts);

  consol.log("Seeding is complete");
  process.exit(0);
  
});
