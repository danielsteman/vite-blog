import React from 'react';
import {
  Box, Button, Heading, Text, useColorModeValue,
} from '@chakra-ui/react';
import { TiArrowRightThick } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import { IBlog } from '../shared/repo.interface';

const BlogPreview: React.FC<IBlog> = ({
  id, title, date, text,
}) => {
  const bg = useColorModeValue('lightgrey', 'darkgrey');
  return (
    <Box>
      <Heading fontSize="36px" fontWeight={500} py={4}>
        {title}
      </Heading>
      <Text py={4} opacity="70%">
        {date}
      </Text>
      <Text>
        {text}
      </Text>
      <Link to={`/blog/${id}`}>
        <Button mt={8} py={1}>
          <Text mr={1}>
            Read more
          </Text>
          <TiArrowRightThick size={24} />
        </Button>
      </Link>
      <Box h={0.5} width="80%" bg={bg} my={20} />
    </Box>
  );
};

export default BlogPreview;
