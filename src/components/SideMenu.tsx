import React, { useState } from 'react';
import {
  Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, useMediaQuery,
} from '@chakra-ui/react';
import {
  MdInfo, MdAutoGraph, MdConstruction, MdContactPage, MdEdit,
} from 'react-icons/md';
import { HamburgerIcon } from '@chakra-ui/icons';
import SideMenuButton from './SideMenuButton';

const SideMenu = () => {
  const [open, setOpen] = useState(false);
  const [isMobile] = useMediaQuery('(max-width: 30em)');
  return (
    <Flex flexDirection="column">
      <Menu>
        {isMobile ? (
          <Menu>
            <MenuButton
              w={1} // workaround to fix width
              as={IconButton}
              icon={<HamburgerIcon />}
              variant="outline"
              onClick={() => setOpen(!open)}
            />
            <MenuList w="fit-content">
              <MenuItem as="a" href="blog">Blog</MenuItem>
              <MenuItem as="a" href="about">About</MenuItem>
              <MenuItem as="a" href="experience">Experience</MenuItem>
              <MenuItem as="a" href="work">Work</MenuItem>
              <MenuItem as="a" href="contact">Contact</MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <Menu>
            <SideMenuButton icon={MdEdit} text="Blog" url="blog" />
            <SideMenuButton icon={MdInfo} text="About" url="about" />
            <SideMenuButton icon={MdAutoGraph} text="Experience" url="experience" />
            <SideMenuButton icon={MdConstruction} text="Work" url="work" />
            <SideMenuButton icon={MdContactPage} text="Contact" url="contact" />
          </Menu>
        )}

      </Menu>
    </Flex>

  );
};

export default SideMenu;
