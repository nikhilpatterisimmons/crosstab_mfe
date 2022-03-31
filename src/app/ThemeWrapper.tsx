import { createTheme } from '@mui/material/styles';
import { withTheme } from '@mui/styles';
import { ThemeProvider as MuiThemeProvider } from '@mui/system';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../styles/theme';

interface iThemeProps {
  children: JSX.Element;
}
const uiTheme = createTheme(defaultTheme);
const Theme = withTheme(
  (props: iThemeProps): JSX.Element => (
    <ThemeProvider theme={uiTheme}>
      <MuiThemeProvider theme={uiTheme}>{props.children}</MuiThemeProvider>
    </ThemeProvider>
  ),
);

export default Theme;
