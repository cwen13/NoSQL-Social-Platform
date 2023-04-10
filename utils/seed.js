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
    const username = getRandomUserName();
    const email = getRandomUserName()+"@orgorg.org";

    users.push({username,email})
  }
  await User.collection.insertMany(users);

  for (let i=0; i<users.length-1; i++) {
    const thoughts = getRandomThoughts(5);
    for (let j=0; j<thoughts.length-1; j++) {
      Thought.create(
	{
	  thoughtText: thoughts[j],
	  username: users[i][0]
	}
      );
    }
  }
    
  console.log("Seeding is complete");
  process.exit(0);
  
});
