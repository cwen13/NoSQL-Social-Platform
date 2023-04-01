const {Schema, model} = require('mongoose');

// containing text, username, date created, and reaction list
const thoughtSchema = new Schema ({
  thoughtText: {type: String, required: true},
  username: {type: String}m,
  dateCreated; {type: Date, default: Date.now},
  reactions: [{type: String}]
});
