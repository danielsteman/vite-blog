import React from "react";
import { Code } from "@chakra-ui/react";

const CodeSnippet = (props: any) => (
  <Code
    variant="solid"
    height="fit-content"
    maxW="100%"
    overflow="auto"
    display="inline-block"
    line-height={0}
  >
    {props.children}
  </Code>
);

export default CodeSnippet;
