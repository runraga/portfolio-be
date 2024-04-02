const express = require("express");
const { getPublicRepos, getReadmeContents } = require("./controller");

const app = express();
app.use(express.json());

app.get("/portfolio-be/public", getPublicRepos);

app.get("/portfolio-be/readme/:repo", getReadmeContents);

app.listen(8080, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`listening on port 8080`);
  }
});

module.exports = app;