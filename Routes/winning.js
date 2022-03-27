const router = require("express").Router();
const winningController = require("../controllers/winningController");

router.get("/item/:id", winningController.getAllUsersByItemId);
router.get("/code/:id", winningController.getWinnerByWinnigCode);
router.post("", winningController.addWinning);
router.get("/winner/:id", winningController.getWinnerByItemId);

module.exports = router;