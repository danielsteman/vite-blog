import { request } from '@octokit/request';
import 'dotenv/config';

export const getRepoLanguage = async (repo: string) => {
  // example: await getRepoLanguage(repoName);
  const response = await request('GET /repos/danielsteman/{repo}/languages', {
    repo,
    headers: {
      authorization: process.env.PAT,
    },
  }).then((resp) => resp.data);
  return response;
};

export const getRepos = async () => {
  // example: await getRepos;
  const response = await request('GET /users/danielsteman/repos', {
    headers: {
      authorization: process.env.PAT,
    },
  }).then((resp) => resp.data.map(
    (repo: any) => (
      {
        name: repo.name,
        description: repo.description,
      }
    ),
  ));
  return response;
};
