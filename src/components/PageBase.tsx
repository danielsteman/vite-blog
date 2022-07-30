import React from 'react';
import {
  Box,
  Button,
  Flex,
  Spacer,
  Center,
  ChakraProvider,
} from '@chakra-ui/react';
import ColorModeSwitcher from './ColorModeSwitcher';
import Logo from './Logo';
import customTheme from '../themes/theme';

interface Props {
  children: React.ReactNode;
}

const PageBase: React.FC<Props> = ({ children }) => (
  <ChakraProvider theme={customTheme}>
    <Box textAlign="left" fontSize="l" py={4} px={8}>
      <Flex>
        <Logo
          h="8vmin"
          pointerEvents="none"
        />
        <Spacer />
        <Center>
          <Button mr={4} bg="transparent">
            Projects
          </Button>
          <Button mr={4} bg="transparent">
            Experience
          </Button>
          <Button mr={4} bg="transparent">
            Blog
          </Button>
          <Button mr={4} bg="transparent">
            Login
          </Button>
          <ColorModeSwitcher mr={4} />
        </Center>
      </Flex>
      {children}
    </Box>
  </ChakraProvider>
);

export default PageBase;
