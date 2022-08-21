import React from 'react';
import { useParams } from 'react-router-dom';
import PageTitle from '../components/PageTitle';
import Base from './Base';

const BlogPost = () => {
  const params = useParams();
  return (
    <Base>
      <PageTitle title={`title of blog ${params.blogId}`} />
    </Base>
  );
};

export default BlogPost;
