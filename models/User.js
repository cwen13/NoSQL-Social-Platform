const {Schema, model} = require('mongoose');
const Thought = require("./Thought");

// containing thougths, friends, username, and email
const userSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectsId()
    },
    username: { type: String,min: [4, "Too few characters"], trim: true, required: true},
    email: {
      type: String,
      trim: true,
      required:true,
      validate: {
	validator: function (e) { /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/i.test(e);},
	message: props => `${props.value} is not a valid email address`
      }
    },
    thougths: [{type: Thought["thoughtSchema"]}]
    
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

userSchema.add({friends: [{type: userSchema}]});

// need a friendsCount virtual
userSchema.virtual("friendCount").get(function() {
  return this.friend.length;
});

const User = model("User", userSchema);

module.exports = User;
