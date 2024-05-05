const { Router } = require("express");

const home = require("../controllers/homepage_controller");

const router = Router();

router.get("/", home);

module.exports = router;
