const { app } = require("./app");
const { database } = require("./utils/databaseUtil");

const startServer = async () => {
  try {
    await database.authenticate();
    console.log("Database authenticated");
    await database.sync();
    console.log("Database synchronized");
    const PORT = 4000;
    app.listen(PORT, () => {
      console.log("Express is running and listenig");
    });
  } catch (error) {
    console.log(error);
  }
};
startServer();
