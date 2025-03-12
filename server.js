/*
SkillSync - AI-Powered Job Recommendation Platform
Full Stack Project using React.js (Frontend) and Node.js (Backend)
*/

// Backend (Node.js + Express.js)
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  skills: [String],
  resume: String,
});

const JobSchema = new mongoose.Schema({
  title: String,
  description: String,
  requiredSkills: [String],
});

const User = mongoose.model("User", UserSchema);
const Job = mongoose.model("Job", JobSchema);

// API Endpoints
app.post("/register", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send({ message: "User registered successfully!" });
});

app.get("/jobs", async (req, res) => {
  const jobs = await Job.find();
  res.send(jobs);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


