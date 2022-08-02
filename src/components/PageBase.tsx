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
import {
  MdInfo, MdAutoGraph, MdConstruction, MdContactPage,
} from 'react-icons/md';
import ColorModeSwitcher from './ColorModeSwitcher';
import Logo from './Logo';
import customTheme from '../themes/theme';
import NavigationButton from './NavigationButton';
import SideMenuButton from './SideMenuButton';

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
    </Box>
    <Grid templateColumns="repeat(4, 1fr)" textAlign="left">
      <GridItem colSpan={1} py={8}>
        <SideMenuButton icon={MdInfo} text="About" url="" />
        <SideMenuButton icon={MdAutoGraph} text="Experience" url="" />
        <SideMenuButton icon={MdConstruction} text="Work" url="" />
        <SideMenuButton icon={MdContactPage} text="Contact" url="" />
      </GridItem>
      <GridItem colSpan={3} p={16}>
        {children}
      </GridItem>
    </Grid>
  </ChakraProvider>
);

export default PageBase;
