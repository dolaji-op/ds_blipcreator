import { MantineThemeOverride } from '@mantine/core';

export const customTheme: MantineThemeOverride = {
  colorScheme: 'dark',
  fontFamily: 'Roboto',
  colors: {
    dark: [
      '#d5d7e0',
      '#acaebf',
      '#8c8fa3',
      '#666980',
      '#4d4f66',
      '#34354a',
      '#2b2c3d',
      'rgba(0, 0, 0, 0)',
      '#0c0d21',
      '#01010a',
    ],
  },
  components: {
    Tooltip: {
      defaultProps: {
        transition: 'pop',
      },
    },
  },
};
