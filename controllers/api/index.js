const router = require("express").Router();

const userRoutes = require("./userRoutes");
const thoughtRoutes = require("./thougthRoutes");

router.use("/users", userRoutes );
router.use("/thoughts", blogPostRoutes);

module.exports = router;
