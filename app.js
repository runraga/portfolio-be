const express = require("express");
// const cors = require("cors")
const { getPublicRepos, getReadmeContents } = require("./controller");
require("dotenv").config();
const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Private-Network", true);
  //  Firefox caps this at 24 hours (86400 seconds). Chromium (starting in v76) caps at 2 hours (7200 seconds). The default value is 5 seconds.
  res.setHeader("Access-Control-Max-Age", 7200);

  next();
});

app.get("/portfolio-be", getPublicRepos);

// app.get("/portfolio-be/readme/:repo", getReadmeContents);

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
