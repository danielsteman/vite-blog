import React, { useState } from 'react';
import {
  Flex, IconButton, Menu, MenuButton, useMediaQuery,
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
          <MenuButton
            w={1} // workaround to fix width
            as={IconButton}
            icon={<HamburgerIcon />}
            variant="outline"
            onClick={() => setOpen(!open)}
          />
        ) : null}
        {!isMobile || (isMobile && open)
          ? (
            <Menu>
              <SideMenuButton icon={MdEdit} text="Blog" url="blog" />
              <SideMenuButton icon={MdInfo} text="About" url="about" />
              <SideMenuButton icon={MdAutoGraph} text="Experience" url="experience" />
              <SideMenuButton icon={MdConstruction} text="Work" url="work" />
              <SideMenuButton icon={MdContactPage} text="Contact" url="contact" />
            </Menu>
          ) : null}
      </Menu>
    </Flex>

  );
};

export default SideMenu;
