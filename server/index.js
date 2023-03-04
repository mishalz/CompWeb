const express = require("express");
const bodyParser = require("body-parser");
const takeScreenshot = require("./screenshot");
const compareSites = require("./compare");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/take_screenshot", async (req, res) => {
  const url = req.body.url;
  console.log("in the server");
  await takeScreenshot(url);
  res.send({ message: "Screenshot has been taken successfully!" });
  //compareSites();
});
app.listen(PORT, () => {
  console.log(`Server Listening on port ${PORT}`);
});
