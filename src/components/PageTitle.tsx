import { Heading } from '@chakra-ui/react';
import React from 'react';

interface Props {
  title: string
}

const PageTitle: React.FC<Props> = ({ title }) => (
  <Heading fontSize="36px" fontWeight={750} py={4}>
    {title}
  </Heading>
);

export default PageTitle;
