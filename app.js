const express = require("express");
const cors = require("cors");
const { getPublicRepos, getReadmeContents } = require("./controller");
require("dotenv").config();
const app = express();
app.use(express.json());

app.use(cors());

app.get("/portfolio-be", getPublicRepos);

app.get("/portfolio-be/readme/:repo", getReadmeContents);

app.use((err, req, res, next) => {
  const { response } = err;
  res.status(response.status).send({ error: response.statusText });
});

app.listen(8080, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`listening on port 8080`);
  }
});

module.exports = app;
