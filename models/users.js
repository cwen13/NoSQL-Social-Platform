const {Schema, model} = require('mongoose');

// containing thougths, friends, username, and email
const userSchema = new Schema (
  {
    username: { type: String,min: [4, "Too few characters"], trim: true, required: true},
    email: {
      type: String,
      trim: true,
      required:true,
      validate: {
	validator: (e) => /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(e);,
	message: props => `$props.value} is not a valid email address`
      }
    },
    thougths: [{type: String,trim: true }],
    friends: [{type: STring, trim: true }]
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);


// need a friendsCount virtual
userSchema.virtual("friendCount").get(function() {
  return this.friend.length;
});

const User = mongoose.model("User", userScehma);

module.exportds = User;

