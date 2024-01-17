import { useBooks } from "../../contexts/BooksContext"
import { useTheme } from "../../contexts/ThemeContext"
import { CounterContainer, Wrapper } from "./styles"

export function Header() {
  const { books } = useBooks()
  const { toggleTheme } = useTheme()

  return (
    <Wrapper>
      <div className="containerToggleTheme">
        <input id="toggleTheme" onClick={toggleTheme} type="checkbox" />
        <label htmlFor="toggleTheme"></label>
      </div>
      <h1>
        A Biblioteca <br />
        Encantada
      </h1>
      <CounterContainer>
        <p>{books.length}</p>
        <p>livros</p>
      </CounterContainer>
    </Wrapper>
  )
}
