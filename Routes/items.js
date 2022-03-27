const router = require("express").Router();
const itemsController = require("../controllers/itemsController");

router.get("", itemsController.getallItems);
router.get("/:id", itemsController.getItemById);
router.post("", itemsController.addItem);
router.delete("/:id", itemsController.deleteItem);
module.exports = router;