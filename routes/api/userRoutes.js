const router = require("express").Router();

const {
  getUsers,
  getUser,
  deleteUser,
  createUser,
  updateUser,
  getFriends,
  getFriend,
  addFriend,
  deleteFriend,

} = require("./../../controllers/api/userControllers");

// /api/users
router.route("/")
  .get(getUsers)
  .post(createUser);

router.route("/:id")
  .get(getUser)
  .put(updateUser)
//  .delete(deleteUser);

//router.route("/:id/friends")
//  .get(getFriends)
//  .post(addFriend);
//
//router.route("/:id/friends/:fid")
//  .get(getFriend)
//  .delete(deleteFriend);

module.exports = router;
