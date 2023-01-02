const express = require("express");
const morgan = require("morgan");
const {
  notFound,
  glbalErrorHandler,
} = require("./controllers/errorController");

const app = express();

// Development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Body parser, reading data from body into req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serving static files
app.use(express.static(`${__dirname}/public`));

// Routes
app.use("/api", require("./routes/apiRouter"));

// Send index.html for SPAs
app.get("*", (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

// Error Handler
app.use(notFound);
app.use(glbalErrorHandler);

module.exports = app;
