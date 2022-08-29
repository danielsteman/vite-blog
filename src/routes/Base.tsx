import React, { useState } from 'react';
import {
  Flex,
  Spacer,
  ChakraProvider,
  Grid,
  GridItem,
  MenuButton,
  IconButton,
  Menu,
  useMediaQuery,
  Box,
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
  const [open, setOpen] = useState(false);
  const [isMobile] = useMediaQuery('(max-width: 30em)');
  return (
    <ChakraProvider theme={customTheme}>
      <Box maxW={1280} textAlign="center" p="2rem" my={0} mx="auto">
        <Flex textAlign="left" flexDirection="row">
          <Link to="/">
            <Logo
              h="8vmin"
              pointerEvents="none"
            />
          </Link>
          <Spacer />
          <Flex flexDirection={['column', 'row', 'row', 'row', 'row']}>
            <Menu>
              {isMobile
                ? (
                  <MenuButton
                    as={IconButton}
                    icon={<HamburgerIcon />}
                    variant="outline"
                    onClick={() => setOpen(!open)}
                  />
                ) : null}
              {!isMobile || (isMobile && open)
                ? (
                  <Menu>
                    <NavigationButton url="https://www.github.com/danielsteman" icon={FaGithub} />
                    <NavigationButton url="https://www.stackoverflow.com/users/11383969/dsteman" icon={FaStackOverflow} />
                    <NavigationButton url="https://www.linkedin.com/in/danielsteman/" icon={FaLinkedin} />
                    <NavigationButton url="https://www.last.fm/user/daniel-steman" icon={FaLastfmSquare} />
                    <ColorModeSwitcher />
                  </Menu>
                )
                : null}
            </Menu>
          </Flex>
        </Flex>
        <Grid templateColumns="repeat(4, 1fr)" textAlign="left">
          <GridItem colSpan={1} py={8}>
            <SideMenu />
          </GridItem>
          <GridItem colSpan={3} py={16} pr={16}>
            {children}
          </GridItem>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};

export default Base;
