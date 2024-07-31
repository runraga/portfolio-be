const axios = require("axios");

const conn = axios.create({
  baseURL: "https://api.github.com",
  timeout: 1000,
  headers: {
    Accept: "application/vnd.github+json",
    "User-Agent": "runraga",
    Authorization: process.env.GIT_HUB_AUTHENTICATION,
  },
});

convertReadme = (decodedReadme) => {
  const regexLookup = {
    title: "^#",
    description: "Short description",
    languages: "Languages used",
    overview: "Overview",
    future: "Future Features",
  };
  const readmeInfo = {};
  for (const [k, v] of Object.entries(regexLookup)) {
    const regex = new RegExp(`/(?<=${v})[^#]+/s`);
    const matches = decodedReadme.match(regex);
    if (matches) {
      readmeInfo[k] = matches[0].trim();
    }
  }
  readmeInfo.readme = decodedReadme;
  return readmeInfo;
};

getReadmeContents = (repo) => {
  return conn
    .get(`/repos/runraga/${repo}/contents/README.md`)
    .then((githubRes) => {
      decoded_contents = atob(githubRes.data.content);
      data = convertReadme(decoded_contents);
      return data;
    });
};

getPublicRepos = (req, res, next) => {
  conn
    .get("/users/runraga/repos")
    .then((githubRes) => {
      return githubRes.data;
    })
    .then((repos) => {
      return repos.map((repo) => {
        return getReadmeContents(repo.name).then((contents) => {
          repo.readme = contents;
          return repo;
        });
      });
    })
    .then((reposWithReadme) => {
      Promise.all(reposWithReadme).then((results) => {
        res.header(
          "Access-Control-Allow-Origin",
          "https://portfolio.helmfarm.co.uk"
        );
        res.status(200).send(results);
      });
    })
    .catch((err) => {
      console.log("err", err);
      next(err);
    });
};

module.exports = {
  getReadmeContents,
  convertReadme,
  getPublicRepos,
};
