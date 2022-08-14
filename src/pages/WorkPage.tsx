import { Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { getRepos } from '../api/githubManager';
import PageTitle from '../components/PageTitle';
import PageBase from './PageBase';

interface Repo {
  id: number,
  name: string,
  description: string,
  languages: [string]
}

interface Repos extends Array<Repo> { }

const WorkPage = () => {
  const title = 'Work';

  const [repos, setRepos] = useState<Repos | null>([]);

  useEffect(() => {
    (async function getReposAsync() {
      const res = await getRepos();
      setRepos(res);
    }());
  }, []);

  return (
    <PageBase>
      <PageTitle title={title} />
      <Box>
        {repos!.map((repo: Repo) => (
          <Box p={4} key={repo.id}>
            {repo.name}
            {repo.description}
          </Box>
        ))}
      </Box>
    </PageBase>
  );
};

export default WorkPage;
