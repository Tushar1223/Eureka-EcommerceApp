const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
  .connect(process.env.DB_URI )
    .then(() => {
      console.log(`Mongodb connected with server:`);
    });
};

module.exports = connectDatabase;
