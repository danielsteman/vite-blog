import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkInlineLinks from 'remark-inline-links';
import PageTitle from '../components/PageTitle';
import Base from './Base';
import { html } from '../content/blog1.md';

const BlogPost = () => {
  const params = useParams();
  return (
    <Base>
      <PageTitle title={`title of blog ${params.blogId}`} />
      <ReactMarkdown remarkPlugins={[remarkGfm, remarkInlineLinks]}>
        {html}
      </ReactMarkdown>
    </Base>
  );
};

export default BlogPost;
