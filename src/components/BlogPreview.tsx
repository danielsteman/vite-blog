import React from 'react';
import {
  Box, Button, Text, useColorModeValue,
} from '@chakra-ui/react';
import { TiArrowRightThick } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import { IBlog } from '../shared/repo.interface';
import PageTitle from './PageTitle';

const BlogPreview: React.FC<IBlog> = ({
  id, title, date, text,
}) => {
  const bg = useColorModeValue('lightgrey', 'darkgrey');
  return (
    <Box>
      <PageTitle>{title}</PageTitle>
      <Text py={4} opacity="70%">
        {date}
      </Text>
      <Text>{text}</Text>
      <Link to={`/blog/${id}`}>
        <Button mt={8} py={1}>
          <Text mr={1}>Read more</Text>
          <TiArrowRightThick size={24} />
        </Button>
      </Link>
      <Box h={0.5} width="80%" bg={bg} my={20} />
    </Box>
  );
};

export default BlogPreview;
