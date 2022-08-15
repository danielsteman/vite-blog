import React, { useEffect, useState } from 'react';
import { Link, Text } from '@chakra-ui/react';
import { getRepos } from '../api/githubManager';
import PageTitle from '../components/PageTitle';
import PageBase from './PageBase';
import WorkItem from '../components/WorkItem';
import { IRepo } from '../shared/repo.interface';

interface IRepos extends Array<IRepo> { }

const WorkPage = () => {
  const title = 'Work';

  const [repos, setRepos] = useState<IRepos | null>([]);
  const start: number = new Date(1561939200000).getFullYear();
  const end: number = new Date().getFullYear();

  useEffect(() => {
    (async function getReposAsync() {
      const res = await getRepos();
      setRepos(res);
    }());
  }, []);

  return (
    <PageBase>
      <PageTitle title={title} />
      <Text>
        Over the last
        {' '}
        {end - start}
        {' '}
        years I have been working on side projects, primarily to keep learning and experimenting with new languages and frameworks that have caught my interest.
        These projects are a mix of full-stack web applications, hardware projects, data analysis and home automation projects.
        This page consumes the
        {' '}
        <Link href="https://docs.github.com/en/rest">Github API</Link>
        {' '}
        to render projects dynamically.
      </Text>
      {repos!.map((repo: IRepo) => (
        <WorkItem repo={repo} key={repo.id} />
      ))}
    </PageBase>
  );
};

export default WorkPage;
