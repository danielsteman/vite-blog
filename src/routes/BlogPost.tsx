import React from 'react';
import { useParams } from 'react-router-dom';
import PageTitle from '../components/PageTitle';
import Base from './Base';
import { ReactComponent } from '../content/blog1.md';

const BlogPost = () => {
  const params = useParams();
  return (
    <Base>
      <PageTitle title={`title of blog ${params.blogId}`} />
      <ReactComponent />
    </Base>
  );
};
// eslint-disable-next-line implicit-arrow-linebreak
export default BlogPost;
