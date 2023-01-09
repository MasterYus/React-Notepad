import './App.css';
import NotepadPage from './pages/notepadPage';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { grey, purple, red } from '@mui/material/colors';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: purple[600],
    },
    secondary: {
      main: grey[300],
    }
  },
  shape: {
    borderRadius: 16
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NotepadPage />
    </ThemeProvider>
  );
}

export default App;
