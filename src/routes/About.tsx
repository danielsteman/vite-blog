import React from 'react';
import { Text } from '@chakra-ui/react';
import PageTitle from '../components/PageTitle';
import Base from './Base';

const About = () => {
  const title = "Hi! I'm Daniel 👋";
  return (
    <Base>
      <PageTitle title={title} />
      <Text>
        Enthousiastic about most tech related things and always learning.
      </Text>
    </Base>
  );
};

export default About;
