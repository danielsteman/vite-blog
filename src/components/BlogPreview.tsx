import React from 'react';
import {
  Box, Button, Text, useColorModeValue, VStack,
} from '@chakra-ui/react';
import { TiArrowRightThick } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import { IBlog } from '../shared/repo.interface';
import PageTitle from './PageTitle';
import BlogTags from './BlogTags';

const BlogPreview: React.FC<IBlog> = ({
  id, title, date, text, tags,
}) => {
  const bg = useColorModeValue('lightgrey', 'darkgrey');
  return (
    <Box>
      <PageTitle>{title}</PageTitle>
      <Text py={4} opacity="70%">
        {date}
      </Text>
      <Text mb={4}>{text}</Text>
      <VStack alignItems="left">
        <BlogTags tags={tags} />
        <Link to={`/blog/${id}`}>
          <Button mt={4} py={1}>
            <Text mr={1}>Read more</Text>
            <TiArrowRightThick size={24} />
          </Button>
        </Link>
      </VStack>
      <Box h={0.5} width="80%" bg={bg} my={20} />
    </Box>
  );
};

export default BlogPreview;
