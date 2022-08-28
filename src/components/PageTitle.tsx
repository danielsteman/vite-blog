import { Heading } from '@chakra-ui/react';
import React from 'react';

export interface IPageTitle {
  children: React.ReactNode;
}

const PageTitle: React.FC<IPageTitle> = ({ children }) => (
  <Heading fontSize="36px" fontWeight={750} py={4}>
    {children}
  </Heading>
);

export default PageTitle;
