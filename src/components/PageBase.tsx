import React from 'react';
import {
  Box,
  Flex,
  Spacer,
  Center,
  ChakraProvider,
} from '@chakra-ui/react';
import { FaGithub, FaStackOverflow, FaLinkedin } from 'react-icons/fa';
import ColorModeSwitcher from './ColorModeSwitcher';
import Logo from './Logo';
import customTheme from '../themes/theme';
import NavigationButton from './NavigationButton';

interface Props {
  children: React.ReactNode;
}

const PageBase: React.FC<Props> = ({ children }) => (
  <ChakraProvider theme={customTheme}>
    <Box textAlign="left" fontSize="l">
      <Flex>
        <Logo
          h="8vmin"
          pointerEvents="none"
        />
        <Spacer />
        <Center>
          <NavigationButton url="www.google.com" icon={FaGithub} />
          <NavigationButton url="www.google.com" icon={FaStackOverflow} />
          <NavigationButton url="www.google.com" icon={FaLinkedin} />
          <ColorModeSwitcher mr={4} />
        </Center>
      </Flex>
      {children}
    </Box>
  </ChakraProvider>
);

export default PageBase;
