const {Schema, model} = require('mongoose');

// containing text, username, date created, and reaction list
const thoughtSchema = new Schema(
  {
    thoughtText: {type: String,trim: true, required: true},
    username: {type: String, trim: true,,
	       dateCreated; {type: Date, default: Date.now()},
	       reactions: [{type: String, trim: true}]
	      },
    reactions: [{type: reactionSchema}]
  },
    {
      toJSON: {
	virtuals: true
      }
    }  
);
  
// need a reactionCount virtual
userSchema.virtual("reactionCount").get(function() {
  return this.friend.length;
});


const Thought = mongoose.model("Thought", thoughtSchema);

module.exports =  Thought
