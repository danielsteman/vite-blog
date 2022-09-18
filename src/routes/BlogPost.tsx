import { Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import remarkGemoji from 'remark-gemoji';
import remarkGfm from 'remark-gfm';
import CodeSnippet from '../components/CodeSnippet';
import PageTitle from '../components/PageTitle';
import Base from './Base';

const LinkRenderer = (props: any) => (
  <a href={props.href} target="_blank" rel="noreferrer">
    <Text as="span" bgColor="teal" padding={0.5}>
      {props.children}
    </Text>
  </a>
);

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
    code: CodeSnippet,
    a: LinkRenderer,
  };

  return (
    <Base>
      <ReactMarkdown
        components={components}
        remarkPlugins={[remarkGfm, remarkGemoji]}
      >
        {text}
      </ReactMarkdown>
    </Base>
  );
};

export default BlogPost;
