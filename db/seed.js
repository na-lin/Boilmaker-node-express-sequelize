const colors = require("colors");
const { db, Example } = require("./index");

const exampleData = require("./data/example");

const seed = async () => {
  try {
    await db.sync({ force: true });
    console.log("db synced".yellow);

    // seed your data
    await Promise.all(
      exampleData.map((data) => {
        return Example.create(data);
      })
    );
    console.log("Seeding success!".underline.green);
    db.close();
  } catch (err) {
    console.error("Oh noes! Something went wrong!".underline.red);
    console.error(err);
    db.close();
  }
};

seed();
