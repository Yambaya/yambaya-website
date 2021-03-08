import React from 'react';
import {ThemeProvider} from '@material-ui/core/styles';
import Theme from './src/themes/theme';

export const wrapRootElement = ({element}) => {
  <ThemeProvider theme={Theme}>
    {element}
  </ThemeProvider>;
};