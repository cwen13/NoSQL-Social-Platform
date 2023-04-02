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
    
  },

  // route to post create new user
  createUser(req,res) {

  },

  // route to put to update user info
  updateUser(req,res) {
  
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
