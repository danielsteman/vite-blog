import React from 'react';
import './App.css';
import {
  Heading,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import {
  MdInfo, MdAutoGraph, MdConstruction, MdContactPage,
} from 'react-icons/md';
import PageBase from './components/PageBase';
import BlogPost from './components/BlogPost';
import SideMenuButton from './components/SideMenuButton';

const App = () => (
  <PageBase>
    <Grid templateColumns="repeat(4, 1fr)">
      <GridItem colSpan={1} py={8}>
        <SideMenuButton icon={MdInfo} text="About" url="" />
        <SideMenuButton icon={MdAutoGraph} text="Experience" url="" />
        <SideMenuButton icon={MdConstruction} text="Work" url="" />
        <SideMenuButton icon={MdContactPage} text="Contact" url="" />
      </GridItem>
      <GridItem colSpan={3} p={16}>
        <Heading fontSize="36px" fontWeight={750} py={4}>
          Blog
        </Heading>
        <BlogPost title="First blog post" date="Mon 1 Aug, 2022" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, corrupti praesentium nihil asperiores earum harum nesciunt, reprehenderit labore eos quaerat optio quam tempora saepe ea. Nobis et reprehenderit voluptate vitae!" />
        <BlogPost title="Second blog post" date="Mon 2 Aug, 2022" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, corrupti praesentium nihil asperiores earum harum nesciunt, reprehenderit labore eos quaerat optio quam tempora saepe ea. Nobis et reprehenderit voluptate vitae!" />
      </GridItem>
    </Grid>
  </PageBase>
);

export default App;
