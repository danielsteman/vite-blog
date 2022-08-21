import React from 'react';
import BlogPreview from '../components/BlogPreview';
import PageTitle from '../components/PageTitle';
import { IBlog } from '../shared/repo.interface';
import Base from './Base';

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: 'First blog post',
      date: 'Mon 1 Aug, 2022',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, corrupti praesentium nihil asperiores earum harum nesciunt, reprehenderit labore eos quaerat optio quam tempora saepe ea. Nobis et reprehenderit voluptate vitae!',
    },
    {
      id: 2,
      title: 'Second blog post',
      date: 'Mon 2 Aug, 2022',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, corrupti praesentium nihil asperiores earum harum nesciunt, reprehenderit labore eos quaerat optio quam tempora saepe ea. Nobis et reprehenderit voluptate vitae!',
    },
  ];
  return (
    <Base>
      <PageTitle title="Blog" />
      {
        blogs.map((blog: IBlog) => (
          <BlogPreview
            id={blog.id}
            title={blog.title}
            date={blog.date}
            text={blog.text}
            key={blog.id}
          />
        ))
      }
    </Base>
  );
};

export default Blog;
