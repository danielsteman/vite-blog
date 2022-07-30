import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  components: {
    Heading: {
      baseStyle: {
        fontWeight: '700',
      },
      sizes: {
        xl: {
          fontSize: '84px',
        },
        lg: {
          fontSize: '36px',
        },
      },
    },
  },
});

export default customTheme;
