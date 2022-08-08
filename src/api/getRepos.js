import { Octokit } from '@octokit/core';

import 'dotenv/config';

const octokit = new Octokit({
  auth: process.env.PAT,
});

await octokit.request('GET /users/{username}/repos', {
  username: 'danielsteman',
});
