import React from "react";
import { Code } from "@chakra-ui/react";

const CodeSnippet = (props: any) => (
  <Code
    variant="solid"
    height="fit-content"
    maxW="100%"
    overflow="auto"
    verticalAlign="middle"
  >
    {props.children}
  </Code>
);

export default CodeSnippet;
