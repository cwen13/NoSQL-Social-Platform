const {Schema, model} = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId:
    {
      type: Schema.Types.ObjectId,
      autoincrement: true
    },
    reactionBody:
    {
      type: String,
      required: true,
      maxLength: 280
    },
    username:
    {
      type: String
    },
    createdAt:
    {
      type: Date,
      default: Date.now
    },

  },
);

module.exports = reactionSchema;
