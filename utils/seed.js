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
    let {wroteUser, userId } = await User.collection.insertOne({username,email})

    const thoughts = getRandomThoughts(5);
    for (const thought of thoughts) {
      
      let thoughtTransaction = await Thought.collection.insertOne(
	{
	  thoughtText: thought,
	  username: username
	}
      );

      await User.findOneAndUpdate(
	{username},
	{$push: {thoughts: thoughtTransaction["insertedId"]}}
      );
    }
    
  }
    
  console.log("Seeding is complete");
  process.exit(0);
  
});
