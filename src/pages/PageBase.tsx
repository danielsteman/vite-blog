import React from 'react';
import {
  Box,
  Flex,
  Spacer,
  Center,
  ChakraProvider,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { FaGithub, FaStackOverflow, FaLinkedin } from 'react-icons/fa';
import ColorModeSwitcher from '../components/ColorModeSwitcher';
import Logo from '../components/Logo';
import customTheme from '../themes/theme';
import NavigationButton from '../components/NavigationButton';
import SideMenu from '../components/SideMenu';

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
          <NavigationButton url="www.github.com/danielsteman" icon={FaGithub} />
          <NavigationButton url="www.stackoverflow.com/users/11383969/dsteman" icon={FaStackOverflow} />
          <NavigationButton url="www.google.com" icon={FaLinkedin} />
          <ColorModeSwitcher mr={4} />
        </Center>
      </Flex>
    </Box>
    <Grid templateColumns="repeat(4, 1fr)" textAlign="left">
      <GridItem colSpan={1} py={8}>
        <SideMenu />
      </GridItem>
      <GridItem colSpan={3} py={16} pr={16}>
        {children}
      </GridItem>
    </Grid>
  </ChakraProvider>
);

export default PageBase;
