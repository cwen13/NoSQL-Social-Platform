const {Schema, model} = require('mongoose');
const reactionSchema = require("./Reaction");

// containing text, username, date created, and reaction list
const thoughtSchema = new Schema(
  {
    thoughtId:
    {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    thoughtText:
    {
      type: String,
      trim: true,
      required: true
    },
    userName:
    {
      type: String,
      trim: true
    },
    dateCreated:
    {
      type: Date,
      default: Date.now()},
    reactions: [reactionSchema]
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

module.exports = {
  Thought,
  thoughtSchema
};
