import React from 'react';
import './App.css';
import {
  Box,
  Button,
  Heading,
  Text,
} from '@chakra-ui/react';
import { TiArrowRightThick } from 'react-icons/ti';
import PageBase from './components/PageBase';

const App = () => (
  <PageBase>
    <Box p={16}>
      <Heading size="lg" fontWeight={750} py={4}>
        Blog
      </Heading>
      <Heading size="lg" fontWeight={500} py={4}>
        First blog post
      </Heading>
      <Text py={4} opacity="70%">
        Mon 1 Aug, 2022
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, corrupti praesentium nihil asperiores earum harum nesciunt, reprehenderit labore eos quaerat optio quam tempora saepe ea. Nobis et reprehenderit voluptate vitae!
      </Text>
      <Button mt={8} py={1}>
        <Text mr={1}>
          Read more
        </Text>
        <TiArrowRightThick size={24} />
      </Button>
    </Box>
  </PageBase>
);

export default App;
