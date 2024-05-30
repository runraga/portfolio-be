// const axios = require("axios");

// const conn = axios.create({
//   baseURL: "https://api.github.com",
//   timeout: 1000,
//   headers: {
//     Accept: "application/vnd.github+json",
//     "User-Agent": "runraga",
//     Authorization: process.env.GIT_HUB_AUTHENTICATION,
//   },
// });

// convertReadme = (decodedReadme) => {
//   const regexLookup = {
//     title: "#",
//     description: "Short description",
//     languages: "Languages used",
//     overview: "Overview",
//     future: "Future Features",
//   };
//   const readmeInfo = {};
//   for (const [k, v] of Object.entries(regexLookup)) {
//     const regex = new RegExp(`(?<=${v})[^#]+`);
//     const matches = decodedReadme.match(regex);
//     if (matches) {
//       readmeInfo[k] = matches[0].trim();
//     }
//   }
//   readmeInfo.readme = decodedReadme;
//   return readmeInfo;
// };

// getReadmeContents = (repo) => {
//   return conn
//     .get(`/repos/runraga/${repo}/contents/README.md`)
//     .then((githubRes) => {
//       decoded_contents = atob(githubRes.data.content);
//       data = convertReadme(decoded_contents);
//       return data;
//     });
// };
const results = [
  {
    id: 765321498,
    node_id: "R_kgDOLZ3hGg",
    name: "nc-de-final-project",
    full_name: "runraga/nc-de-final-project",
    private: false,
    owner: {
      login: "runraga",
      id: 8512502,
      node_id: "MDQ6VXNlcjg1MTI1MDI=",
      avatar_url: "https://avatars.githubusercontent.com/u/8512502?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/runraga",
      html_url: "https://github.com/runraga",
      followers_url: "https://api.github.com/users/runraga/followers",
      following_url:
        "https://api.github.com/users/runraga/following{/other_user}",
      gists_url: "https://api.github.com/users/runraga/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/runraga/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/runraga/subscriptions",
      organizations_url: "https://api.github.com/users/runraga/orgs",
      repos_url: "https://api.github.com/users/runraga/repos",
      events_url: "https://api.github.com/users/runraga/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/runraga/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/runraga/nc-de-final-project",
    description: "northcoders final project",
    fork: false,
    url: "https://api.github.com/repos/runraga/nc-de-final-project",
    forks_url: "https://api.github.com/repos/runraga/nc-de-final-project/forks",
    keys_url:
      "https://api.github.com/repos/runraga/nc-de-final-project/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/runraga/nc-de-final-project/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/runraga/nc-de-final-project/teams",
    hooks_url: "https://api.github.com/repos/runraga/nc-de-final-project/hooks",
    issue_events_url:
      "https://api.github.com/repos/runraga/nc-de-final-project/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/runraga/nc-de-final-project/events",
    assignees_url:
      "https://api.github.com/repos/runraga/nc-de-final-project/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/runraga/nc-de-final-project/branches{/branch}",
    tags_url: "https://api.github.com/repos/runraga/nc-de-final-project/tags",
    blobs_url:
      "https://api.github.com/repos/runraga/nc-de-final-project/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/runraga/nc-de-final-project/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/runraga/nc-de-final-project/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/runraga/nc-de-final-project/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/runraga/nc-de-final-project/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/runraga/nc-de-final-project/languages",
    stargazers_url:
      "https://api.github.com/repos/runraga/nc-de-final-project/stargazers",
    contributors_url:
      "https://api.github.com/repos/runraga/nc-de-final-project/contributors",
    subscribers_url:
      "https://api.github.com/repos/runraga/nc-de-final-project/subscribers",
    subscription_url:
      "https://api.github.com/repos/runraga/nc-de-final-project/subscription",
    commits_url:
      "https://api.github.com/repos/runraga/nc-de-final-project/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/runraga/nc-de-final-project/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/runraga/nc-de-final-project/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/runraga/nc-de-final-project/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/runraga/nc-de-final-project/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/runraga/nc-de-final-project/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/runraga/nc-de-final-project/merges",
    archive_url:
      "https://api.github.com/repos/runraga/nc-de-final-project/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/runraga/nc-de-final-project/downloads",
    issues_url:
      "https://api.github.com/repos/runraga/nc-de-final-project/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/runraga/nc-de-final-project/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/runraga/nc-de-final-project/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/runraga/nc-de-final-project/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/runraga/nc-de-final-project/labels{/name}",
    releases_url:
      "https://api.github.com/repos/runraga/nc-de-final-project/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/runraga/nc-de-final-project/deployments",
    created_at: "2024-02-29T17:39:55Z",
    updated_at: "2024-04-02T13:28:16Z",
    pushed_at: "2024-04-04T14:17:10Z",
    git_url: "git://github.com/runraga/nc-de-final-project.git",
    ssh_url: "git@github.com:runraga/nc-de-final-project.git",
    clone_url: "https://github.com/runraga/nc-de-final-project.git",
    svn_url: "https://github.com/runraga/nc-de-final-project",
    homepage: null,
    size: 854,
    stargazers_count: 0,
    watchers_count: 0,
    language: "Python",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "main",
    permissions: {
      admin: true,
      maintain: true,
      push: true,
      triage: true,
      pull: true,
    },
    readme: {
      title: "Data Lakehouse",
      description:
        "An AWS cloud-based solution for processing and transforming online transaction database into an online analytical database lakehouse using an ETL approach.",
      languages:
        "- Python\n- Terraform\n- SQL\n- GitHub Workflow\n- Amazon Web Services",
      overview:
        "This group project was completed as part of the Northcoders Data Engineering course. It's goal was to create an application to extract, transform and load data from a transactional database to a STAR schema analytics database.\n\nThe minimum viable product produced consisted of:\n\n- two S3 buckets for extracted and transformed data in parquet format\n- three Python Lambdas to extact data from the OLTP database, transform data in to target STAR schemas and to load data into the OLAP database\n- CloudWatch logs and alarms to monitor lambda performance\n\n[![MVP diagram](https://github.com/runraga/nc-de-final-project/blob/main/diagrams/MVP.png?raw=true)](https://github.com/runraga/nc-de-final-project/blob/main/diagrams/MVP.png?raw=true)\n\nA CI/CD automation pipeline was set up for the application using:\n\n- Git Hooks to enforce fully unit tested (Jest), PEP8 compliant and 'safe' python code\n- Terraform to manage infrastructure in AWS\n- GitHub workflow for continuous deployment of code as it was commited to the main branch",
      future:
        "- Improvements to integration testing\n- Restructure ingestion bucket data to better track raw data\n- Refactor to enable history tracking of transactions in OLAP database",
      readme:
        "# Data Lakehouse\n\n### Short description\n\nAn AWS cloud-based solution for processing and transforming online transaction database into an online analytical database lakehouse using an ETL approach.\n\n### Languages used\n\n- Python\n- Terraform\n- SQL\n- GitHub Workflow\n- Amazon Web Services\n\n### Overview\n\nThis group project was completed as part of the Northcoders Data Engineering course. It's goal was to create an application to extract, transform and load data from a transactional database to a STAR schema analytics database.\n\nThe minimum viable product produced consisted of:\n\n- two S3 buckets for extracted and transformed data in parquet format\n- three Python Lambdas to extact data from the OLTP database, transform data in to target STAR schemas and to load data into the OLAP database\n- CloudWatch logs and alarms to monitor lambda performance\n\n[![MVP diagram](https://github.com/runraga/nc-de-final-project/blob/main/diagrams/MVP.png?raw=true)](https://github.com/runraga/nc-de-final-project/blob/main/diagrams/MVP.png?raw=true)\n\nA CI/CD automation pipeline was set up for the application using:\n\n- Git Hooks to enforce fully unit tested (Jest), PEP8 compliant and 'safe' python code\n- Terraform to manage infrastructure in AWS\n- GitHub workflow for continuous deployment of code as it was commited to the main branch\n\n### Future Features\n\n- Improvements to integration testing\n- Restructure ingestion bucket data to better track raw data\n- Refactor to enable history tracking of transactions in OLAP database\n",
    },
  },
];

getPublicRepos = (req, res, next) => {
  res.status(200).send(results);

  // conn
  //   .get("/users/runraga/repos")
  //   .then((githubRes) => {
  //     return githubRes.data;
  //   })
  //   .then((repos) => {
  //     return repos.map((repo) => {
  //       return getReadmeContents(repo.name).then((contents) => {
  //         repo.readme = contents;
  //         return repo;
  //       });
  //     });
  //   })
  //   .then((reposWithReadme) => {
  //     Promise.all(reposWithReadme).then((results) => {
  //       res.header(
  //         "Access-Control-Allow-Origin",
  //         "https://portfolio.helmfarm.co.uk"
  //       );
  //       res.status(200).send(results);
  //     });
  //   })
  //   .catch((err) => {
  //     console.log("err", err);
  //     next(err);
  //   });
};

module.exports = {
  // getReadmeContents,
  // convertReadme,
  getPublicRepos,
};
