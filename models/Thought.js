const {Schema, model} = require('mongoose');

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
      default: Date.now()
    },
    reactions: [
      {
	reactionText: {
	  type: String,
	  trim:true,
	  required:true
	},
	reactionDate: {
	  type: Date,
	  default: Date.now
	}
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
