const router = require('express').Router();

const {
  getThoughts,
  getThought,
  getReactions,
  getReaction,
  addReaction,
  deleteReaction
} = require("./../../controllers/api/thoughtControllers")

// /api/thoughts
router.route("/")
  .get(getThoughts);

router.route("/:id")
  .get(getThought)
  .post(addReaction);

router.route("/:id/reaction")
  .get(getReactions);

router.route("/:id/reaction/:rid")
  .get(getReaction)
  .delete(deleteReaction);

module.exports = router;
