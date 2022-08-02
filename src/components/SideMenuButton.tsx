import React from 'react';
import {
  HStack, LinkBox, LinkOverlay, Text,
} from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface Props {
  icon: IconType
  text: string
  url: string
}

const SideMenuButton: React.FC<Props> = ({ icon, text, url }) => (
  <LinkBox>
    <LinkOverlay href={url}>
      <HStack my={2} w="fit-content" rounded={8} opacity="80%" _hover={{ opacity: '100%' }}>
        {React.createElement(icon, { size: 18 })}
        <Text fontWeight="600">
          {text}
        </Text>
      </HStack>
    </LinkOverlay>
  </LinkBox>
);

export default SideMenuButton;
