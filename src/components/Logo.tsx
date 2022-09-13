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
  const [position, setPosition] = React.useState(0);

  const ref = React.useRef<HTMLImageElement>(null);
  const computedStyle = ref.current ? window.getComputedStyle(ref.current) : undefined;

  const spin = keyframes`
  from { transform: rotate(${rotateClockwise ? position : 360}deg); }
  to { transform: rotate(${rotateClockwise ? 360 : position}deg); }
  `;
  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion
    ? undefined
    : `${spin} infinite 20s linear`;

  return (
    <Box
      onClick={() => {
        const tf = computedStyle?.transform;
        const sin = tf?.split(', ')[1];
        if (sin) {
          const degrees = Math.round(Math.asin(parseFloat(sin)) * (180 / Math.PI));
          setPosition(degrees);
        }
        setRotateClockwise(!rotateClockwise);
      }}
    >
      <chakra.img
        animation={animation}
        src={logo}
        ref={ref}
        ml={3}
        mt={1}
        {...props}
      />
    </Box>
  );
};

export default Logo;
