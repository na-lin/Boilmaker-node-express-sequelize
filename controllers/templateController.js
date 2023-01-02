const asyncHandler = require("express-async-handler");
const AppError = require("../utils/appError");

// @desc: Test route controller
// @route: /api/template/test
// @access: public
const testTemplate = asyncHandler((req, res, next) => {
  res.status(200).json({
    status: "success",
    data: {
      message: "Hello from template route controller",
    },
  });
});

// @desc: Test Error handler
// @route: /api/template/error
// @access: public
const testError = (req, res, next) => {
  throw new AppError("test for template error handler", 400);
};

module.exports = { testTemplate, testError };
