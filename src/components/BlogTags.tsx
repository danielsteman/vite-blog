import React from 'react';
import {
  Tag, TagLabel, HStack,
} from '@chakra-ui/react';

interface Props {
  tags: string[]
}

interface ColorMap { [key:string]: string; }

const BlogTags: React.FC<Props> = ({ tags }) => {
  const tagsColors: ColorMap = {
    'Web Development': 'teal',
    DevOps: 'red',
    'Internet of Things': 'blue',
    Rust: 'orange',
  };
  return (
    <HStack>
      {tags.map((tag: string) => (
        <Tag size="md" colorScheme={tagsColors[tag]} borderRadius="full" width="fit-content" px={3} py={1}>
          <TagLabel mb={-1}>{tag}</TagLabel>
        </Tag>
      ))}
    </HStack>
  );
};

export default BlogTags;
