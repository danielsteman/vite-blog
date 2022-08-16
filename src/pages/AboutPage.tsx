import React from 'react';
import { Text } from '@chakra-ui/react';
import PageTitle from '../components/PageTitle';
import PageBase from './PageBase';

const AboutPage = () => {
  const title = "Hi! I'm Daniel 👋";
  return (
    <PageBase>
      <PageTitle title={title} />
      <Text>
        Enthousiastic about most tech related things and always learning.
      </Text>
    </PageBase>
  );
};

export default AboutPage;
