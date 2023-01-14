const app = require("./app");
const mongoose = require("mongoose");
require('dotenv').config();
const { MONGO_URI, PORT } = process.env;

mongoose
  .connect(MONGO_URI)
  .then(() => {
  console.log("Database connection successful")
  app.listen(PORT, () => console.log("Server running. Use our API on port: 3000"));
}).catch(err => {
  console.log(err.message);
  process.exit(1);
});
