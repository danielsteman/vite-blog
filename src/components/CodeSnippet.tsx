import React from 'react';
import { Code } from '@chakra-ui/react';

const CodeSnippet = (props: any) => (
  <Code>
    {props.children}
  </Code>
);

export default CodeSnippet;
