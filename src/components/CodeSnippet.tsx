import React from 'react';
import { Code } from '@chakra-ui/react';

interface Props {
  children: React.ReactNode;
}

const CodeSnippet: React.FC<Props> = ({ children }) => (
  <Code>
    {children}
  </Code>
);

export default CodeSnippet;
