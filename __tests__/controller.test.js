const { convertReadMe } = require("../controller");

const input =
  "# Data Lakehouse\n### Short description\nAn AWS cloud-based solution for processing and transforming online transaction database into an online analytical database lakehouse using an ETL approach.\n\n### Languages used\n- Python\n- Terraform\n- SQL\n- GitHub Workflow\n- Amazon Web Services\n\n### Overview\nThis group project was completed as part of the Northcoders Data Engineering course. It's goal was to create an application to extract, transform and load data from a transactional database to a STAR schema analytics database.\n\nThe minimum viable product produced consisted of: \n- two S3 buckets for extracted and transformed data in parquet format\n- three Python Lambdas to extact data from the OLTP database, transform data in to target STAR schemas and to load data into the OLAP database\n- CloudWatch logs and alarms to monitor lambda performance\n\n[![N|Solid](https://github.com/runraga/nc-de-final-project/blob/main/diagrams/MVP.png)](https://github.com/runraga/nc-de-final-project/blob/main/diagrams/MVP.png)\n\nA CI/CD automation pipeline was set up for the application using:\n- Git Hooks to enforce fully unit tested (Jest), PEP8 compliant and 'safe' python code\n- Terraform to manage infrastructure in AWS\n- GitHub workflow for continuous deployment of code as it was commited to the main branch\n\n### Future Features\n- Improvements to integration testing\n- Restructure ingestion bucket data to better track raw data\n- Refactor to enable history tracking of transactions in OLAP database\n";

describe("convertReadMe", () => {
  test("shoud return an object", () => {
    expect(typeof convertReadMe("")).toEqual("object");
  });
  test("should return an object with key 'title' whose value is the project title from the readme", () => {
    const result = convertReadMe(input);
    expect(result.hasOwnProperty("title")).toBe(true);
    expect(result.title).toBe("Data Lakehouse");
  });
  test("should return an object with the key 'description' whose value is the one-line description from the readme", () => {
    const result = convertReadMe(input);
    expect(result["description"]).toBe(
      "An AWS cloud-based solution for processing and transforming online transaction database into an online analytical database lakehouse using an ETL approach."
    );
  });
  test("should return an object with the key 'languagues' whose value is an array of strings detailing the programming languages listed in the readme file", () => {
    const result = convertReadMe(input);
    const expected =
      "- Python\n- Terraform\n- SQL\n- GitHub Workflow\n- Amazon Web Services";
    expect(result.languages).toEqual(expected);
  });
  test("should return an object with the key 'overview' whose value is a string describing the project in the readme file", () => {
    const result = convertReadMe(input);
    const expected =
      "This group project was completed as part of the Northcoders Data Engineering course. It's goal was to create an application to extract, transform and load data from a transactional database to a STAR schema analytics database.\n\nThe minimum viable product produced consisted of: \n- two S3 buckets for extracted and transformed data in parquet format\n- three Python Lambdas to extact data from the OLTP database, transform data in to target STAR schemas and to load data into the OLAP database\n- CloudWatch logs and alarms to monitor lambda performance\n\n[![N|Solid](https://github.com/runraga/nc-de-final-project/blob/main/diagrams/MVP.png)](https://github.com/runraga/nc-de-final-project/blob/main/diagrams/MVP.png)\n\nA CI/CD automation pipeline was set up for the application using:\n- Git Hooks to enforce fully unit tested (Jest), PEP8 compliant and 'safe' python code\n- Terraform to manage infrastructure in AWS\n- GitHub workflow for continuous deployment of code as it was commited to the main branch";
    expect(result.overview).toEqual(expected);
  });
  test("should return an object with the key 'future' whose value is a string describing changes in future version from the readme file", () => {
    const result = convertReadMe(input);
    const expected =
      "- Improvements to integration testing\n- Restructure ingestion bucket data to better track raw data\n- Refactor to enable history tracking of transactions in OLAP database";
    expect(result["future"]).toEqual(expected);
  });
  test("should return an object with the key 'readme' whose value is a string equal to the input parameter", () => {
    const result = convertReadMe(input);
    expect(result.readme).toEqual(input);
  });
});
