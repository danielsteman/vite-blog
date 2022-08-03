import React from 'react';
import PageTitle from '../components/PageTitle';
import PageBase from './PageBase';

const WorkPage = () => {
  const title = 'Work';
  return (
    <PageBase>
      <PageTitle title={title} />
    </PageBase>
  );
};

export default WorkPage;
