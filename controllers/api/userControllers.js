// Routes need to include create, update, and delete api calls
const {User, Thought} = require("./../../models");

module.exports = {
  // DONE route to return all users
  getUsers(req, res) {
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
    User.findOne({_id: req.params.id})
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
    User.findOneAndDelete({_id: req.params.id})
      .then((user) =>
	!user
	  ? res.status(404).json({message:"No user with that ID"})
	  : res.json(user)
      );
  },

  // DONE route to post create new user
  createUser(req,res) {
    User.create(req.body)
    ,then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  // DONE route to put to update user info
  updateUser(req,res) {
    User.findOneAndUpdate(
      {_id: req.params.id},
      { $set: req.body},
      {runValidators: true, new:true}
    )
      .then((user) =>
	!course
	  ? res.status(404).json({message: "No user with that id"})
	  : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

//  // TODO get a user's friends
//  getFriends(req,res) {
//    User.find({_id: req.paramss.id})
//      .then((user) =>
//	!user
//	  ? res.status(400).json({message: `No user with ID ${req.params.id}`})
//	// continue ere to deelte this user through all friends list
//	  : User
//    
//  },
//
//  // TODO get a user's friend
//  getFriend(req,res) {
//    User.find(
//      {
//	_id: req.params.id,
//	friends[`${fid}`],
//      }
//      
//  },
//  
//  //TODO route to add user's friends
//  addFriend(req,res) {
//    User.findOneAndUpdate(
//      {_id: req.params.id},
//      {$addToSet:
//       {asignment: req.params.fid}}
//    },
//  }
//  
//  // TODO route to delet user's friends
//  deleteFriend(req,res) {
//    User.findByIdAndDelete(req.params.id}
};
