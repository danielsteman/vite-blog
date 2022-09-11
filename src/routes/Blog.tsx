import React from 'react';
import BlogPreview from '../components/BlogPreview';
import PageTitle from '../components/PageTitle';
import { IBlog } from '../shared/repo.interface';
import Base from './Base';

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: 'Monitor your houseplants with a NodeMCU ESP8266 microcontroller and a capacitive sensor',
      date: 'Mon 1 Aug, 2022',
      text: 'Often, it\'s hard to observe moisture in soil, making it hard to judge whether your houseplants need water. This is a problem that can be countered with sensors. Of course, sensors need to be hooked up to a device to interpret and process signals. I was looking for a lightweight Arduino-like piece of hardware with integrated Wi-Fi and found the ESP8266.',
    },
    {
      id: 2,
      title: 'Build your own blog',
      date: 'Mon 1 Sep, 2022',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, corrupti praesentium nihil asperiores earum harum nesciunt, reprehenderit labore eos quaerat optio quam tempora saepe ea. Nobis et reprehenderit voluptate vitae!',
    },
  ];
  return (
    <Base>
      <PageTitle>
        Blog
      </PageTitle>
      {
        blogs.reverse().map((blog: IBlog) => (
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
