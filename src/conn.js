const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/karanSchool", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connection created successfully");
  })
  .catch((err) => {
    console.log("err", err);
  });
