import React from 'react';
import { Box } from '@chakra-ui/react';
import {
  MdInfo, MdAutoGraph, MdConstruction, MdContactPage, MdEdit,
} from 'react-icons/md';
import SideMenuButton from './SideMenuButton';

const SideMenu = () => (
  <Box>
    <SideMenuButton icon={MdEdit} text="Blog" url="blog" />
    <SideMenuButton icon={MdInfo} text="About" url="about" />
    <SideMenuButton icon={MdAutoGraph} text="Experience" url="experience" />
    <SideMenuButton icon={MdConstruction} text="Work" url="work" />
    <SideMenuButton icon={MdContactPage} text="Contact" url="contact" />
  </Box>
);

export default SideMenu;
