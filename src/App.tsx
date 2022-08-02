import React from 'react';
import './App.css';
import {
  Heading,
} from '@chakra-ui/react';
import PageBase from './components/PageBase';
import BlogPost from './components/BlogPost';

const App = () => (
  <PageBase>
    <Heading fontSize="36px" fontWeight={750} py={4}>
      Blog
    </Heading>
    <BlogPost title="First blog post" date="Mon 1 Aug, 2022" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, corrupti praesentium nihil asperiores earum harum nesciunt, reprehenderit labore eos quaerat optio quam tempora saepe ea. Nobis et reprehenderit voluptate vitae!" />
    <BlogPost title="Second blog post" date="Mon 2 Aug, 2022" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, corrupti praesentium nihil asperiores earum harum nesciunt, reprehenderit labore eos quaerat optio quam tempora saepe ea. Nobis et reprehenderit voluptate vitae!" />
  </PageBase>
);

export default App;
