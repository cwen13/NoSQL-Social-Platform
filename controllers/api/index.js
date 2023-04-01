const router = require("express").Router();

const userRoutes = require("./usersRoutes");
const thoughtRoutes = require("./thougthsRoutes");

router.use("/users", userRoutes );
router.use("/thoughts", blogPostRoutes);

module.exports = router;
