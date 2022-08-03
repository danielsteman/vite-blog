import React from 'react';
import BlogPost from '../components/BlogPost';
import PageTitle from '../components/PageTitle';
import PageBase from './PageBase';

const BlogPage = () => (
  <PageBase>
    <PageTitle title="Blog" />
    <BlogPost title="First blog post" date="Mon 1 Aug, 2022" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, corrupti praesentium nihil asperiores earum harum nesciunt, reprehenderit labore eos quaerat optio quam tempora saepe ea. Nobis et reprehenderit voluptate vitae!" />
    <BlogPost title="Second blog post" date="Mon 2 Aug, 2022" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, corrupti praesentium nihil asperiores earum harum nesciunt, reprehenderit labore eos quaerat optio quam tempora saepe ea. Nobis et reprehenderit voluptate vitae!" />
  </PageBase>
);

export default BlogPage;
