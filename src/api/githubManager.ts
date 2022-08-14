import { request } from '@octokit/request';
import 'dotenv/config';

export const getRepoLanguage = async (repo: string) => {
  // example: await getRepoLanguage(repoName);
  const response = await request('GET /repos/danielsteman/{repo}/languages', {
    repo,
    headers: {
      authorization: `token ${process.env.PAT}`,
    },
  }).then((resp) => resp.data);
  return response;
};

export const getRepos = async () => {
  // example: await getRepos;
  const response = await request('GET /users/danielsteman/repos', {
    headers: {
      authorization: `token ${process.env.PAT}`,
    },
  }).then((resp) => resp.data.map(
    async (repo: any) => {
      const languages = await getRepoLanguage(repo.name);
      console.log(languages);
      return (
        {
          name: repo.name,
          description: repo.description,
          languages,
        }
      );
    },
  ));
  return response;
};

const x = await getRepos();
console.log(x);
