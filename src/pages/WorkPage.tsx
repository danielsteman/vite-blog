import { Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { getRepos } from '../api/githubManager';
import PageTitle from '../components/PageTitle';
import PageBase from './PageBase';

interface RepoData {
  [index: number]: { name: string, description: string, languages: [string] }
}

const WorkPage = () => {
  const title = 'Work';

  const [repos, setRepos] = useState<RepoData | null>([]);

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
        {repos.map((repo) => (
          <Box p={4}>
            {repo.name}
            {repo.description}
          </Box>
        ))}
      </Box>
    </PageBase>
  );
};

export default WorkPage;
