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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus doloremque exercitationem, corrupti, nulla hic fugiat dolor excepturi, eaque eum neque distinctio earum voluptates labore sunt! Culpa assumenda veritatis laborum minus?
      </Text>
    </PageBase>
  );
};

export default AboutPage;
