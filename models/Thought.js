const {Schema, model} = require('mongoose');
const reactionSchema = require("Reaction");

// containing text, username, date created, and reaction list
const thoughtSchema = new Schema(
  {
    thoughtText:
    {
      type: String,
      trim: true,
      required: true,
      minLength: 1,
      maxLength: 280
    },
    createdAt:
    {
      type: Date,
      default: Date.now()
    },
    username:
    {
      type:String,
      required:true,
    },
    reactions: [
      {
	type: reactionSchema
      }
    ]
  },
  {
    toJSON: {
      virtuals: true
    }
  }  
);

// need a reactionCount virtual
thoughtSchema.virtual("reactionCount").get(function() {
  return this.reactions.length;
});


const Thought = model("Thought", thoughtSchema);

module.exports =
  {
    Thought,
    thoughtSchema
  };
