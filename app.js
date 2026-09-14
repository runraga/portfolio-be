require("dotenv").config();

const express = require("express");
const { getPublicRepos, getReadmeContents } = require("./controller");

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
  });
});

app.get("/api/projects", getPublicRepos);

app.get("/api/projects/:repo/readme", async (req, res, next) => {
  try {
    const readme = await getReadmeContents(req.params.repo);

    if (!readme) {
      return res.status(404).json({
        error: "README not found",
      });
    }

    return res.status(200).json(readme);
  } catch (err) {
    next(err);
  }
});

app.use((err, req, res, next) => {
  console.error(err);

  const status = err.response?.status || 500;

  res.status(status).json({
    error:
      err.response?.data?.message ||
      err.message ||
      "Internal server error",
  });
});

const port = process.env.PORT || 3001;
const host = "127.0.0.1";

app.listen(port, host, () => {
  console.log(`Portfolio backend listening on http://${host}:${port}`);
});

module.exports = app;
