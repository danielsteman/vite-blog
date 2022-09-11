import React from 'react';
import {
  Flex,
  Spacer,
  ChakraProvider,
  Grid,
  GridItem,
  Box,
  useMediaQuery,
} from '@chakra-ui/react';
import {
  FaGithub, FaStackOverflow, FaLinkedin, FaLastfmSquare,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ColorModeSwitcher from '../components/ColorModeSwitcher';
import Logo from '../components/Logo';
import customTheme from '../themes/theme';
import NavigationButton from '../components/NavigationButton';
import SideMenu from '../components/SideMenu';

interface Props {
  children: React.ReactNode;
}

const Base: React.FC<Props> = ({ children }) => {
  const [isMobile] = useMediaQuery('(max-width: 30em)');
  return (
    <ChakraProvider theme={customTheme}>
      <Grid
        templateColumns="repeat(4, 1fr)"
        templateRows="repeat(2, 1fr)"
        textAlign="left"
        maxW={1280}
        p="2rem"
        my={0}
        mx="auto"
      >
        <GridItem colSpan={4} rowSpan={2}>
          <Flex textAlign="left" flexDirection="row">
            {isMobile ? (
              <Box mb={4}>
                <SideMenu />
              </Box>
            ) : null}
            <Link to="/">
              <Logo
                h="10vmin"
                pointerEvents="none"
              />
            </Link>
            <Spacer />
            <Box>
              <NavigationButton url="https://www.github.com/danielsteman" icon={FaGithub} />
              <NavigationButton url="https://www.stackoverflow.com/users/11383969/dsteman" icon={FaStackOverflow} />
              <NavigationButton url="https://www.linkedin.com/in/danielsteman/" icon={FaLinkedin} />
              <NavigationButton url="https://www.last.fm/user/daniel-steman" icon={FaLastfmSquare} />
              <ColorModeSwitcher />
            </Box>
          </Flex>
        </GridItem>
        {!isMobile ? (
          <GridItem colSpan={1} py={8}>
            <SideMenu />
          </GridItem>
        ) : null}
        <GridItem
          colSpan={[4, 3, 3, 3, 3]}
          py={[0, 16, 16, 16, 16]}
          pr={[0, 16, 16, 16, 16]}
        >
          {children}
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
};

export default Base;
