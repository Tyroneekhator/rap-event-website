const express = require("express");
const router = express.Router();
const pageController = require("../controllers/pageController");

router.get("/", pageController.renderHome);
router.get("/line", pageController.renderLineup);
router.get("/stages", pageController.renderStages);
router.get("/Advice", pageController.renderAdvice);
router.get("/contact", pageController.renderContact);
router.get("/form", pageController.renderForm);

module.exports = router;
