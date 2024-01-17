import { ThemeProvider } from "styled-components"
import GlobalStyle from "./styles/global"

import { Header } from "./components/Header"
import { Main } from "./components/Main"

import { BooksProvider } from "./contexts/BooksContext"
import { useTheme } from "./contexts/ThemeContext"
import { ModalContextProvider } from "./contexts/ModalContext"
import { Footer } from "./components/Footer"

export function App() {
  const { theme } = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <BooksProvider>
        <GlobalStyle />
        <Header />
        <ModalContextProvider>
          <Main />
        </ModalContextProvider>
        <Footer />
      </BooksProvider>
    </ThemeProvider>
  )
}
