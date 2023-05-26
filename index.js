const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;

const allData = require("./data/chef_recipe.json");
const e = require("express");

app.use(cors());

app.get("/allData", (req, res) => {
  //   console.log(allData);
  res.send(allData);
});

app.get("/allData/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const selectChef = allData.find((n) => n.id === id);
  res.send(selectChef);
});

app.get("/", (req, res) => {
  res.send("Chef_Recipe Server Is Running Sajjat-Rahman");
});

app.listen(port, () => {
  console.log(`Chef and Recipe API is running on port: ${port}`);
});
