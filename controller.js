const axios = require("axios");

const conn = axios.create({
  baseURL: "https://api.github.com",
  timeout: 1000,
  headers: { Accept: "application/vnd.github+json", "User-Agent": "runraga" },
});

module.exports.getPublicRepos = (req, res) => {
  conn.get("/users/runraga/repos").then((githubRes) => {
    res.status(200).send({ data: githubRes.data });
  });
};

module.exports.getReadmeContents = (req, res) => {
  const { repo } = req.params;
  conn.get(`/repos/runraga/${repo}/contents/README.md`).then((githubRes) => {
    console.log(githubRes);
    decoded_contents = atob(githubRes.data.content);

    res.status(200).send({ data: decoded_contents });
  });
  //"https://api.github.com/repos/runraga/be-pets-and-owners-solo/contents/{+path}"
};

module.exports.convertReadMe = (decodedReadme) => {
  const readmeInfo = {};
  const title = decodedReadme.match(/(?<=#) ([\w ]+)(?=\n)/);
  if (title) {
    readmeInfo.title = title[1];
  }
  const shortDescription = decodedReadme.match(/(?<=Short description\n)(.+)/);
  if (shortDescription) {
    readmeInfo["short description"] = shortDescription[1];
  }
  const languages = decodedReadme.match(/(?<=Languages used\n)(.+\n)+/);
  if (languages) {
    noNewLines = languages[0].replaceAll("\n", "");
    langArr = noNewLines.split("- ");
    readmeInfo.languages = langArr.slice(1);
  }
  const overview = decodedReadme.match(/(?<=Overview\n)[^#]+/);
  if (overview) {
    readmeInfo.overview = overview[0];
  }
  const future = decodedReadme.match(/(?<=Future Features\n)[^#]+/);
  if (future) {
    readmeInfo["future features"] = future[0];
  }
  return readmeInfo;
};
