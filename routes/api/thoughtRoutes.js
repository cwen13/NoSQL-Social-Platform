const router = require('express').Router();

const {
  getThoughts,
  getThought,
  getReactions,
  getReaction,
  addReaciton,
  deleteReaction
} = require("./../../controllers/api/thoughtControllers")

// /api/thoughts
router.route("/")
  .get(getThoughts)
  .post(addReaction);

router.route("/:id")
  .get(getThought);

router.route("/:id/reaction")
  .get(getReactions);

router.route("/:id/reaction/:rid")
  .get(getReaction)
//  .delete(deleteReaciton);
