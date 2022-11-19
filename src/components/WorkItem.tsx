import React from 'react';
import {
  Avatar, Box, Heading, HStack, Link, Tag, TagLabel, Text, useColorModeValue, VStack,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { IRepo } from '../shared/repo.interface';
import iconSources from '../assets/languageIcons';

interface Props {
  repo: IRepo
}

const WorkItem: React.FC<Props> = ({
  repo,
}) => {
  const colorScheme = useColorModeValue('teal', 'blue');
  return (
    <Box key={repo.id} py={4}>
      <VStack align="left" py={2}>
        <Link href={repo.url} isExternal w="fit-content">
          <HStack>
            <Heading size="sm">{repo.name}</Heading>
            <ExternalLinkIcon mx="2px" />
          </HStack>
        </Link>
        <Text>{repo.description}</Text>
      </VStack>
      <HStack>
        {Object.keys(repo.languages).map((lang: string) => (
          <Tag
            size="lg"
            borderRadius="full"
            colorScheme={colorScheme}
            key={lang}
          >
            <Avatar
              src={iconSources[lang]}
              size="xs"
              ml={-1}
              mr={2}
              p={0.5}
              bg="transparent"
            />
            <TagLabel>{lang}</TagLabel>
          </Tag>
        ))}
      </HStack>
    </Box>
  );
};

export default WorkItem;
