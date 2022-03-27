const router = require("express").Router();
const userController = require("../controllers/user");

router.get("", userController.getAllitemsByUserId);
router.get("/:id", userController.getAllBooks);
router.post("/:id", userController.addOrder);
router.post("", userController.addUser);

module.exports = router;