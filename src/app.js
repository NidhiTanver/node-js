const express = require("express");
const app = express();
require("./conn");
const studentRouter = require("./routers/StudentRouter");
const Port = process.env.PORT || 8000;
app.use(express.json());
app.use(studentRouter);

app.listen(Port, () => {
  console.log("listening server on", Port);
});
