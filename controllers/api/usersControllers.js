// Routes need to include create, update, and delete api calls
const {User} = require("./../../models");

modue.exports = {
// route to return all users
  getUsers(req, res) {
    User.find({}, (err,result) => {
      if (err) {
	res.status(500).send(err);
      } else {
	res.status(200).json(result);
      }
    });
  },
  
  // route to get sinlge user
  getUser(req, res) {
    User.findOne({_id: req.params.}, (err,result) => {
      if (err) {
	res.status(500).send(err);
      } else {
	res.status(200).json(result);
      }
    });
  },
  
  // route to delete user
  deleteUser(req,res){ 
    User.findOneAndDelete({_id: req.params.id})
      .then((user) =>
	!user
	  ? res.status(404).json({message:"No user with that ID"})
	// TODO finish this up
	  : User.deleteMany({_id: {$in:  }});
      )
  },

  // route to post create new user
  createUser(req,res) {
    User.create(req.body)
    ,then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  // route to put to update user info
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

  // get a user's friends
  getFriends(req,res) {

  },

  // get a user's friend
  getFriend(req,res) {

  },
  
  // route to add users' friends
  addFriend(req,res) {

  },
  
  // route to delet users' friends
  deleteFriend(req,res) {

  },
