require("dotenv").config();

const mongoose = require("mongoose");

function connectDB() {
  // Database connection
  mongoose.connect(
    process.env.MONGO_CONNECTION_URL
  ); /*
  useNewUrlParser, useUnifiedTopology, useFindAndModify, and useCreateIndex 
  are no longer supported options. Mongoose 6 always behaves as if useNewUrlParser, 
  useUnifiedTopology, and useCreateIndex are true, and useFindAndModify is false. 
  Please remove these options from your code.
  */
  

  const connection = mongoose.connection;
  connection.on("error", console.error.bind(console, "connection error: "));
  connection.once("open", () => {
    console.log("Databse connected.");
  });
}

module.exports = connectDB;
