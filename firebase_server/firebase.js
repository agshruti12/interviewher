const express = require("express");
const cors = require("cors");
const { Submissions, Questions, storage } = require("./config");

const app = express();
app.use(express.json());
app.use(cors());

// CREATE QUESTION (question)
app.post("/create_question", async (req, res) => {
  const data = req.body;
  console.log("Data of Question ", data);
  await Questions.add(data);
  res.send({ message: "Question added!" });
});

// CREATE A SUBMISSION (question id, FILE?)
app.post("/create_submission", async (req, res) => {
  const data = req.body;
  console.log("Data of Submission ", data);
  await Submissions.add(data);
  res.send({ message: "Submission added!" });
});

// app.post("/update", async (req, res) => {
//   const id = req.body.id;
//   delete req.body.id;
//   const data = req.body;
//   await User.doc(id).update(data);
//   console.log("Data of Users ", data);
//   await User.add(data);
//   res.send({ message: "User added!" });
// });

// GET ALL QUESTIONS
app.get("/questions", async (req, res) => {
  const snapshot = await Questions.get();
  const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  res.send(list);
});

// get submissions BY ID (add into request BODY)
app.get("/submissions", async (req, res) => {
  // console.log("the id is", req.params.id);
  const snapshot = await Submissions.get();
  const questionID = req.body.id;
  const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  // filter by id?
  const filteredList = list.filter((item) => item.id === questionID);
  res.send(filteredList);
});

// app.get("/submissions", async (req, res) => {
//   const snapshot = await Submissions.get();
//   // const questionID = req.params.id;
//   const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//   // filter by id?
//   // const filteredList = list.filter((item) => item.questionID === questionID);
//   res.send(list);
// });

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
