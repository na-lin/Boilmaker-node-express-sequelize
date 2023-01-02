const asyncHandler = require("express-async-handler");
const AppError = require("../utils/appError");
const { Example } = require("../db");

// @desc: Test route controller
// @route: /api/template/test
// @access: public
const testTemplate = (req, res, next) => {
  res.status(200).json({
    status: "success",
    data: {
      message: "Hello from template route controller",
    },
  });
};

// @desc: Test Error handler
// @route: /api/template/error
// @access: public
const testError = (req, res, next) => {
  throw new AppError("test for template error handler", 400);
};

// @desc: Test for CRUD between database
// @route: /api/template/db
// @access: public
const fetchExampleData = asyncHandler(async (req, res, next) => {
  const examples = await Example.findAll();

  res.status(200).json({
    status: "success",
    results: examples.length,
    data: {
      examples,
    },
  });
});

module.exports = { testTemplate, testError, fetchExampleData };
