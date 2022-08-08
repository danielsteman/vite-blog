import React from 'react';
import {
  Box,
  Heading,
  Text,
} from '@chakra-ui/react';
import PageTitle from '../components/PageTitle';
import PageBase from './PageBase';

const ExperiencePage = () => {
  const title = 'Experience';
  return (
    <PageBase>
      <PageTitle title={title} />
      <Box py={4}>
        <Heading size="lg" fontWeight={400}>
          Data engineer
        </Heading>
        <Heading size="md" fontWeight={700}>
          a.s.r.
        </Heading>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore non soluta reiciendis animi odit, iste ipsam dicta sunt error facere voluptatibus, maiores itaque amet esse rem vero aliquid dolore cum!
        </Text>
      </Box>
    </PageBase>
  );
};

export default ExperiencePage;
