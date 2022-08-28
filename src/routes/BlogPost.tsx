import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import PageTitle from '../components/PageTitle';
import Base from './Base';

const BlogPost = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    fetch('../content/blog1.md')
      .then((res) => res.text())
      .then((res) => setText(res));
  }, []);

  const components = {
    // eslint-disable-next-line react/no-unstable-nested-components, react/prop-types
    h1: ({ ...props }) => <PageTitle>{props.children}</PageTitle>,
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
