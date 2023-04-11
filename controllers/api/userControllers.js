// Routes need to include create, update, and delete api calls
const {User, Thought} = require("./../../models");

module.exports = {
  // DONE route to return all users
  getAllUsers(req, res) {
    User.find({}, (err,result) => {
      if (err) {
	res.status(500).send(err);
      } else {
	res.status(200).json(result);
      }
    });
  },
  
  // DONE route to get sinlge user
  getUser(req, res) {
    User.findOne({_id: req.params.userId})
      .select("-__v")
      .then((user) =>
	!user
	  ? res.status(404).json({message: "There is no one by that ID"})
	  : res.json(user)
      )
      .catch((err) => json(err));
  },
  
  // DONE route to delete user
  deleteUser(req,res){ 
    User.findOneAndDelete({_id: req.params.userId})
      .then((user) =>
	!user
	  ? res.status(404).json({message:"No user with that ID"})
	  : res.json(user)
      );
  },

  // DONE route to post create new user
  createUser(req,res) {
    User.create(req.body)
    .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  // DONE route to put to update user info
  updateUser(req,res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
	!user
	  ? res.status(404).json({message: "No user with that id"})
	  : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  
  // DONE route to add user's friends
  addFriend(req,res) {
    User.findOneAndUpdate(
      {_id: req.params.userId},
      {$push:
       {
	 friends: req.params.friendId
       }
      },
      {
	runValidators: true,
	new: true
      }
  
    ).then((friend) =>
      !friend
	? res.status(404).json({message: "They not add this friend"})
	: res.json(friend))
      .catch((err) => res.json(err));
  },
  
  // DONE route to delet user's friends
  deleteFriend(req,res) {
    User.findOneAndDelete(
      {_id:req.params.userId},
      {$pull: {friends: {_id: req.params.friendId}}},
    )
      .then((user) =>
	!user
	  ? res.status(404).json({message:"They were not a friend of thiers"})
	  : res.json(user)
      );
  }
};
