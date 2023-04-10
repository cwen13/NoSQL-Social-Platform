const router = require("express").Router();

const {
  getAllUsers,
  getUser,
  deleteUser,
  createUser,
  updateUser,
  addFriend,
  deleteFriend,
} = require("./../../controllers/api/userControllers");

// /api/users
router.route("/")
  .get(getAllUsers)
  .post(createUser);

router.route("/:userId")
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);

router.route("/:userId/friends/:friendId")
  .post(addFriend)
  .delete(deleteFriend);

module.exports = router;
