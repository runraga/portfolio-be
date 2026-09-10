console.log("Portfolio backend starting...");
console.log("GIT_HUB_AUTHENTICATION present?", !!process.env.GIT_HUB_AUTHENTICATION);
const express = require("express");
const cors = require("cors");
const { getPublicRepos, getReadmeContents } = require("./controller");
require("dotenv").config();
const app = express();
app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
  res.json({ status: 'ok' });
});

app.get("/portfolio-be", getPublicRepos);

app.get("/portfolio-be/readme/:repo", getReadmeContents);

app.use((err, req, res, next) => {
  const { response } = err;
  res.status(response.status).send({ error: response.statusText });
});

const port = process.env.PORT || 8080;
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`listening on port ${port}`);
  }
});

module.exports = app;
