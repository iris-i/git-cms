import { Octokit } from "@octokit/core";

const octokit = new Octokit({
  auth: process.env.GITHUB_PAT,
});

export default octokit;
