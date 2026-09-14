const axios = require("axios");

const GITHUB_USERNAME = "runraga";
const CACHE_TTL_MS = 15 * 60 * 1000;

const conn = axios.create({
  baseURL: "https://api.github.com",
  timeout: 5000,
  headers: {
    Accept: "application/vnd.github+json",
    "User-Agent": "helmfarm-portfolio",
    "X-GitHub-Api-Version": "2026-03-10",
  },
});

let projectsCache = null;
let projectsCacheTime = 0;

const convertReadme = (decodedReadme) => {
  const regexLookup = {
    title: "^#",
    description: "Short description",
    languages: "Languages used",
    overview: "Overview",
    future: "Future Features",
  };

  const readmeInfo = {};

  for (const [key, heading] of Object.entries(regexLookup)) {
    const regex = new RegExp(`(?<=${heading}).*?(?=\\n#|$)`, "s");
    const matches = decodedReadme.match(regex);

    if (matches) {
      readmeInfo[key] = matches[0].trim();
    }
  }

  readmeInfo.readme = decodedReadme;
  return readmeInfo;
};

const getReadmeContents = async (repo) => {
  try {
    const response = await conn.get(
      `/repos/${GITHUB_USERNAME}/${encodeURIComponent(repo)}/readme`,
      {
        headers: {
          Accept: "application/vnd.github.raw+json",
        },
      }
    );

    return convertReadme(response.data);
  } catch (err) {
    if (err.response?.status === 404) {
      return null;
    }

    throw err;
  }
};

const getPublicRepos = async (req, res, next) => {
  try {
    const now = Date.now();

    if (projectsCache && now - projectsCacheTime < CACHE_TTL_MS) {
      return res.status(200).json(projectsCache);
    }

    const githubRes = await conn.get(`/users/${GITHUB_USERNAME}/repos`, {
      params: {
        type: "owner",
        sort: "updated",
        per_page: 100,
      },
    });

    const reposWithReadmes = [];

    for (const repo of githubRes.data) {
      const readme = await getReadmeContents(repo.name);

      reposWithReadmes.push({
        ...repo,
        readme,
      });
    }

    projectsCache = reposWithReadmes;
    projectsCacheTime = Date.now();

    return res.status(200).json(projectsCache);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getReadmeContents,
  convertReadme,
  getPublicRepos,
};
