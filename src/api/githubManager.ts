import { request } from '@octokit/request';

export const getRepoLanguage = async (repo: string) => {
  // example: await getRepoLanguage(repoName);
  const response = await request('GET /repos/danielsteman/{repo}/languages', {
    repo,
    headers: {
      authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
    },
  }).then((resp) => resp.data);
  return response;
};

export const getRepos = async () => {
  // example: await getRepos;
  const response = await request('GET /users/danielsteman/repos', {
    headers: {
      authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
    },
  }).then((resp) => resp.data.filter((repo: any) => repo.fork === false).map(
    async (repo: any) => {
      const languages = await getRepoLanguage(repo.name);
      return (
        {
          id: repo.id,
          name: repo.name,
          description: repo.description,
          languages,
        }
      );
    },
  ));
  return Promise.all(response);
};
