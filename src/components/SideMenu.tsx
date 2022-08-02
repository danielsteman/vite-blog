import React from 'react';
import { Box } from '@chakra-ui/react';
import {
  MdInfo, MdAutoGraph, MdConstruction, MdContactPage,
} from 'react-icons/md';
import SideMenuButton from './SideMenuButton';

const SideMenu = () => (
  <Box>
    <SideMenuButton icon={MdInfo} text="About" url="" />
    <SideMenuButton icon={MdAutoGraph} text="Experience" url="" />
    <SideMenuButton icon={MdConstruction} text="Work" url="" />
    <SideMenuButton icon={MdContactPage} text="Contact" url="" />
  </Box>
);

export default SideMenu;
