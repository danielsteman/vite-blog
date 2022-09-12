import * as React from 'react';
import {
  chakra,
  keyframes,
  ImageProps,
  usePrefersReducedMotion,
  Box,
} from '@chakra-ui/react';
import logo from '../assets/memoji.png';

const Logo = (props: ImageProps) => {
  const [rotateClockwise, setRotateClockwise] = React.useState(false);

  const ref = React.useRef<HTMLImageElement | undefined>();
  const computedStyle = ref.current ? window.getComputedStyle(ref.current) : null;

  const spin = keyframes`
  from { transform: rotate(${rotateClockwise ? 0 : 360}deg); }
  to { transform: rotate(${rotateClockwise ? 360 : 0}deg); }
  `;
  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion
    ? undefined
    : `${spin} infinite 20s linear`;

  return (
    <Box
      onClick={() => {
        setRotateClockwise(!rotateClockwise);
      }}
    >
      <chakra.img
        animation={animation}
        src={logo}
        // ref={ref}
        ml={3}
        mt={1}
        {...props}
      />
    </Box>
  );
};

export default Logo;
