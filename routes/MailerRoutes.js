const router = require("express").Router();
const mailController = require("../controllers/Controller/mailController");

router.route("/send").post(mailController.send);

module.exports = router;
