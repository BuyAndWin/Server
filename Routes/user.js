const router = require("express").Router();
const userController = require("../controllers/userController");

router.get("", userController.getAllitemsByUserId);
router.post("/:id", userController.addOrder);
router.post("", userController.addUser);

module.exports = router;