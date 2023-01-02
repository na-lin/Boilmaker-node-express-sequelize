const express = require("express");
const router = express.Router();

// Test middleware
router.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// Sub-router
router.use("/template", require("./templateRouter"));

module.exports = router;
