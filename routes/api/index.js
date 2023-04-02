const router = require("express").Router();
const userRoutes = require("./userRoutes");
const thoughtRoutes = require("./thoughtRoutes");

router.use("/user", userRoute);
router.use("/thought", thoughtRoutes);

modeule.exports = router;


