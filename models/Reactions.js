const {Schema, model} = require('mongoose');

// contining thought id, user id, date created, and reaction text
const reacitonSchema = new Schema {(
  thoughtId: {type: String},
  userId: {type: String},
  dateCreated: {type: Date, default: Date.now()},
  reactionText: {type: String, trim: true}
});


const Reaction = mongoose.model("Reaciton", reactionSchema);

module.exports = Reaction;

