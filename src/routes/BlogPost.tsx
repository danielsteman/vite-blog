import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import CodeSnippet from '../components/CodeSnippet';
import PageTitle from '../components/PageTitle';
import Base from './Base';

const BlogPost = () => {
  const [text, setText] = useState('');
  const params = useParams();

  useEffect(() => {
    fetch(`../content/blog${params.blogId}.md`)
      .then((res) => res.text())
      .then((res) => setText(res));
  }, []);

  const components = {
    // eslint-disable-next-line react/no-unstable-nested-components, react/prop-types
    h1: ({ ...props }) => <PageTitle>{props.children}</PageTitle>,
    // eslint-disable-next-line react/no-unstable-nested-components, react/prop-types
    code: ({ ...props }) => <CodeSnippet>{props.children}</CodeSnippet>,
  };

  return (
    <Base>
      <ReactMarkdown components={components}>
        {text}
      </ReactMarkdown>
    </Base>
  );
};

export default BlogPost;
