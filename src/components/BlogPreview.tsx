import React from 'react';
import {
  Avatar,
  Box, Button, Tag, TagLabel, Text, useColorModeValue, VStack,
} from '@chakra-ui/react';
import { TiArrowRightThick } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import { IBlog } from '../shared/repo.interface';
import PageTitle from './PageTitle';

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
      <Text>{text}</Text>
      <VStack alignItems="left">
        <Link to={`/blog/${id}`}>
          <Button mt={8} py={1}>
            <Text mr={1}>Read more</Text>
            <TiArrowRightThick size={24} />
          </Button>
        </Link>
        {tags.map((tag): any => {
          <Tag size="lg" colorScheme="red" borderRadius="full" width="fit-content">
            <Avatar size="xs" ml={-1} mr={2} />
            <TagLabel>{tag}</TagLabel>
          </Tag>;
        })}
      </VStack>
      <Box h={0.5} width="80%" bg={bg} my={20} />
    </Box>
  );
};

export default BlogPreview;
