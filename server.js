const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const colors = require("colors");

const app = require("./app");
const { db } = require("./db");

// sync to db
const conectionToDatabase = () => {
  db.sync()
    .then(() => {
      console.log("db synced".bgYellow);
    })
    .catch((err) => {
      console.log("There is error when you try to connect to database".bgRed);
      console.log("Error stack of Database connect error", err);
    });
};
conectionToDatabase();

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`.underline.bgGreen);
});
