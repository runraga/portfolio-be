const axios = require("axios");

const conn = axios.create({
  baseURL: "https://api.github.com",
  timeout: 1000,
  headers: { Accept: "application/vnd.github+json", "User-Agent": "runraga" },
});

getPublicRepos = (req, res, next) => {
  conn
    .get("/users/runraga/repos")
    .then((githubRes) => {
      res.header("Access-Control-Allow-Origin", "*");
      console.log(githubRes.data);
      res.status(200).send(githubRes.data);
    })
    .catch((err) => {
      next(err);
    });
};

convertReadMe = (decodedReadme) => {
  const regexLookup = {
    title: "#",
    description: "Short description",
    languages: "Languages used",
    overview: "Overview",
    future: "Future Features",
  };
  const readmeInfo = {};
  for (const [k, v] of Object.entries(regexLookup)) {
    const regex = new RegExp(`(?<=${v})[^#]+`);
    const matches = decodedReadme.match(regex);
    if (matches) {
      readmeInfo[k] = matches[0].trim();
    }
  }
  readmeInfo.readme = decodedReadme;
  return readmeInfo;
};

getReadmeContents = (req, res, next) => {
  const { repo } = req.params;
  conn
    .get(`/repos/runraga/${repo}/contents/README.md`)
    .then((githubRes) => {
      decoded_contents = atob(githubRes.data.content);
      data = convertReadMe(decoded_contents);
      res.header("Access-Control-Allow-Origin", "*");
      res.status(200).send({ data });
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};

module.exports = {
  getReadmeContents,
  convertReadMe,
  getPublicRepos,
};
