import { ThemeProvider } from 'styled-components'
import { Home } from './src/pages/Home';

import theme from './src/global/styles/theme'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
    
  );
}
