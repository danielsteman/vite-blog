import React from 'react';
import { Button } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface Props {
  icon: IconType,
  url: string,
}

const NavigationButton: React.FC<Props> = ({ icon, url }) => (
  <Button
    bg="transparent"
    mr={2}
    px={2}
    onClick={(e) => {
      e.preventDefault();
      window.location.href = url;
    }}
  >
    {React.createElement(icon, { size: 24 })}
  </Button>
);

export default NavigationButton;
