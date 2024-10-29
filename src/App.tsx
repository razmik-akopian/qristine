import { createTheme, MantineProvider } from '@mantine/core';
import { Main } from './components/Main/';

import '@mantine/core/styles.css';
import './App.css';

const theme = createTheme({
  fontFamily: 'Manrope, sans-serif',
  headings: { fontFamily: 'Manrope, sans-serif' },
});

const App = () => {
  return (
    <MantineProvider theme={theme}>
      <Main />
    </MantineProvider>
  );
};

export { App };
