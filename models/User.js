const {Schema, model} = require('mongoose');

// containing thougths, friends, username, and email
const userSchema = new Schema(
  {
    userName: {
      type: String,
      min: [4, "Too few characters"],
      trim: true,
      required: true
    },
    email: {
      type: String,
      trim: true,
      required:true,
      validate: {
	validator: function (e) { /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/i.test(e);},
	message: props => `${props.value} is not a valid email address`
      }
    },
    thoughts: [
      {
	type: Schema.Types.ObjectId,
	ref: "Thought"
      }
    ],
    friends [
      {
	type: Schema.Types.ObjectId,
	ref: "User"
      }
    ],
    
    },
  {
    toJSON: {
      virtuals: true
    }
  }
);

userSchema.add(
  {
    friends: [{type: userSchema}]
  });

// need a friendsCount virtual
userSchema.virtual("friendCount").get(function() {
  return this.friends.length;
});

const User = model("User", userSchema);

module.exports = User;

