const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// GET projects
app.get("/projects", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./data.json"));
  res.json(data);
});

// POST project (optional tapi bagus buat nilai)
app.post("/projects", (req, res) => {
  const newProject = req.body;
  const data = JSON.parse(fs.readFileSync("./data.json"));

  data.push(newProject);

  fs.writeFileSync("./data.json", JSON.stringify(data, null, 2));
  res.json({ message: "Project added" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});