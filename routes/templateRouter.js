const express = require("express");
const router = express.Router();
const {
  testTemplate,
  testError,
} = require("../controllers/templateController");

router.route("/test").get(testTemplate);

router.route("/error").get(testError);

module.exports = router;
