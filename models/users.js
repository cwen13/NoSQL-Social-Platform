const {Schema, model} = require('mongoose');

// containing thougths, friends, username, and email
const userSchema = new Schema ({
  username: { type: String, required: true},
  email: {type: String, required:true},
  thougths: [{type: String, }],
  friends: [{type: STring, }]
});
  
