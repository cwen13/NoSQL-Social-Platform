const {Schema, model} = require('mongoose');

// contining thought id, user id, date created, and reaction text
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },

    thoughtId: {type: String},
    userId: {type: String},
    dateCreated: {type: Date, default: Date.now()},
    reactionText: {type: String, trim: true}
  },
  {
    toJSON: {
      virtuals: true
    }
  }  
);


const Reaction = model("Reaciton", reactionSchema);

module.exports = reactionSchema;

