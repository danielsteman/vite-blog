import React from 'react';
import {
  InputGroup, InputLeftElement, Input, InputRightElement, Center, Kbd,
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => (
  <InputGroup maxW={400}>
    <InputLeftElement
      pointerEvents="none"
    >
      <FaSearch color="gray.300" />
    </InputLeftElement>
    <Input type="tel" placeholder="Search..." />
    <InputRightElement
      pointerEvents="none"
      w="fit-content"
    >
      <Center>
        <Kbd mr={1}>cmd</Kbd>
        <Kbd mr={2}>k</Kbd>
      </Center>
    </InputRightElement>
  </InputGroup>
);

export default SearchBar;
