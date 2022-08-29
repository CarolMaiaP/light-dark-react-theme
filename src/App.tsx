import GlobalStyle from "./styles/global"
import { Header } from "./components/Header/Header"
import { ThemeProvider, DefaultTheme } from 'styled-components'
import usePersistedState from "./utils/usePersistedState"
import light from "./styles/themes/light"
import dark from "./styles/themes/dark"

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  function toggleTheme(){
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle/>
        <Header toggleTheme={toggleTheme}/>
      </div>
    </ThemeProvider>
  )
}

export default App
