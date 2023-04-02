const router = require('express').Router();

const {
  getThoughts,
  getThought,
  getReactions,
  getReaction,
  addReaciton,
  deleteReaction
} = require("./../../controllers/thoughtsControllers")


router.route("/")
  .get(getThoughts)
  .post(addReaction);

router.route("/:id")
  .get(getThought);

router.route("/:id/reaction")
  .get(getReactions);

router.route("/:id/reaction/:rid")
  .get(getReaction);
