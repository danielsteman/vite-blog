import React, { useState } from 'react';
import {
  Box,
  Flex,
  Spacer,
  ChakraProvider,
  Grid,
  GridItem,
  MenuButton,
  IconButton,
  Menu,
} from '@chakra-ui/react';
import {
  FaGithub, FaStackOverflow, FaLinkedin, FaLastfmSquare,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';
import ColorModeSwitcher from '../components/ColorModeSwitcher';
import Logo from '../components/Logo';
import customTheme from '../themes/theme';
import NavigationButton from '../components/NavigationButton';
import SideMenu from '../components/SideMenu';

interface Props {
  children: React.ReactNode;
}

const Base: React.FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(true);
  return (
    <ChakraProvider theme={customTheme}>
      <Box textAlign="left" fontSize="l">
        <Flex flexDirection={['column', 'row', 'row', 'row', 'row']}>
          <Link to="/">
            <Logo
              h="8vmin"
              pointerEvents="none"
            />
          </Link>
          <Spacer />
          {open
            ? (
              <Box>
                <NavigationButton url="https://www.github.com/danielsteman" icon={FaGithub} />
                <NavigationButton url="https://www.stackoverflow.com/users/11383969/dsteman" icon={FaStackOverflow} />
                <NavigationButton url="https://www.linkedin.com/in/danielsteman/" icon={FaLinkedin} />
                <NavigationButton url="https://www.last.fm/user/daniel-steman" icon={FaLastfmSquare} />
                <ColorModeSwitcher />
              </Box>
            )
            : (
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                onClick={() => setOpen(!open)}
              />
            )}
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
};

export default Base;
