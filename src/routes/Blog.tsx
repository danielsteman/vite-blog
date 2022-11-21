import React from 'react';
import BlogPreview from '../components/BlogPreview';
import { IBlog } from '../shared/repo.interface';
import Base from './Base';

const Blog = () => {
  const blogs: IBlog[] = [
    {
      id: 1,
      title: 'Monitor your houseplants with a NodeMCU ESP8266 microcontroller and a capacitive sensor 🌱',
      date: 'Mon 1 Aug, 2022',
      text: 'Often, it\'s hard to observe moisture in soil, making it hard to judge whether your houseplants need water. This is a problem that can be countered with sensors. Of course, sensors need to be hooked up to a device to interpret and process signals. I was looking for a lightweight Arduino-like piece of hardware with integrated Wi-Fi and found the ESP8266.',
      tags: ['Internet of Things'],
    },
    {
      id: 2,
      title: 'BYOB: Build Your Own Blog 🖊️',
      date: 'Thu 1 Sep, 2022',
      text: 'Maybe you\'re just like me and you\'re doing several side projects. Some of them you complete, some of them you put back on the shelf to maybe pick up at a later point in time, or never. Either way, it can be rewarding to look back from time to time and see what you\'ve been doing over the years.',
      tags: ['Web Development'],
    },
    {
      id: 3,
      title: 'First steps towards a home lab ☁️',
      date: 'Wed 12 Oct, 2022',
      text: 'Recently I have bought an Intel NUC, primarily to self-host Home Assistant and some other software that you would expect in a home lab.',
      tags: ['DevOps'],
    },
    {
      id: 4,
      title: 'WASM with Javascript and Rust 🦀',
      date: 'Fri 24 Oct, 2022',
      text: 'Web Assembly (WASM) is a new approach towards web development, which leverages the speed and robustness of lower level languages such as C, C++ and Rust to power websites. In this post I will go through an example in Rust.',
      tags: ['Web Development', 'Rust'],
    },
    {
      id: 5,
      title: 'ML model serving with Seldon Core (MLOps part 1) 🤖🧠',
      date: 'TBD',
      text: 'In this series of posts I want to write about my journey towards a fully functional machine learning operations (MLOps) ecosystem that I started working on.',
      tags: ['Machine learning'],
    },
  ];
  return (
    <Base>
      {
        blogs.reverse().map((blog: IBlog) => (
          <BlogPreview
            id={blog.id}
            title={blog.title}
            date={blog.date}
            text={blog.text}
            tags={blog.tags}
            key={blog.id}
          />
        ))
      }
    </Base>
  );
};

export default Blog;
