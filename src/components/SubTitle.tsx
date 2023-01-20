import { Heading } from "@chakra-ui/react";
import React from "react";

export interface ISubTitle {
  children: React.ReactNode;
}

const SubTitle: React.FC<ISubTitle> = ({ children }) => (
  <Heading fontSize="24px" fontWeight={750} py={4}>
    {children}
  </Heading>
);

export default SubTitle;
