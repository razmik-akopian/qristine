import '@mantine/core/styles.css';
import './App.css';

import { createTheme, MantineProvider } from '@mantine/core';
import { Main } from './components/Main/Main';

const theme = createTheme({});

const App = () => {
  return (
    <MantineProvider theme={theme}>
      <Main />
    </MantineProvider>
  );
};

export { App };
