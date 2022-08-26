import GlobalStyle from "./styles/global"
import { Header } from "./components/Header/Header"
import { ThemeProvider } from 'styled-components'
import light from "./styles/themes/light"
import dark from "./styles/themes/dark"
import { useState } from "react"

function App() {
  const [theme, setTheme] = useState(light);

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
