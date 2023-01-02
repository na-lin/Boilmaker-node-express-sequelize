const express = require("express");
const router = express.Router();
const {
  testTemplate,
  testError,
  fetchExampleData,
} = require("../controllers/templateController");

router.route("/test").get(testTemplate);

router.route("/error").get(testError);

router.get("/db", fetchExampleData);

module.exports = router;
