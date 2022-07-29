const express = require("express");
const app = new express();
const router = new express.Router();
const StudentModel = require("../studentModel");

router.get("/", (req, res) => {
  res.send("This is a new route with home page");
});

// router.post("/students", async (req, res) => {
//   console.log("REq.body", req.body);
//   const user = new StudentModel(req.body);
//   user
//     .save()
//     .then((res) => {
//       res.status(201).send(user);
//     })
//     .catch((err) => {
//       res.status(400).send(err);
//     });
// });

router.get("/students", async (req, res) => {
  try {
    const result = await StudentModel.find();
    console.log("ResultS", result);
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

router.get("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const result = await StudentModel.findById(_id);
    console.log("Rsult", result);
    if (!result) {
      res.status(404).send();
    } else {
      res.status(500).send(result);
    }
  } catch (error) {
    console.log("ERr", error);
  }
});

router.patch("/students/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const result = await StudentModel.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    console.log("patch res", result);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/students", async (req, res) => {
  const user = new StudentModel(req.body);
  const result = await user.save();
  console.log("using async", result);
  try {
    res.status(201).send(result);
  } catch (error) {
    res.status(400).send(result);
  }
});

//delete
router.delete("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const result = await StudentModel.findByIdAndDelete(_id);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
