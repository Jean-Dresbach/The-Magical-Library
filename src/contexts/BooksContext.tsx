import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState
} from "react"

import { Book } from "../components/Main/types"

interface IBooksContext {
  books: Book[]
  addBook: (book: Book) => void
  deleteBook: (id: number) => void
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>
}

const BooksContext = createContext<IBooksContext>({} as IBooksContext)

interface BooksProviderProps {
  children: ReactNode
}

export function BooksProvider({ children }: BooksProviderProps) {
  const initialState = JSON.parse(localStorage.getItem("books") || "[]")

  const [books, setBooks] = useState<Book[]>(initialState)

  useEffect(() => localStorage.setItem("books", JSON.stringify(books)), [books])

  function addBook(book: Book) {
    setBooks(preState => [...preState, book])
  }

  function deleteBook(id: number) {
    const filteredBooks = books.filter(b => b.id !== id)
    setBooks(filteredBooks)
  }

  return (
    <BooksContext.Provider value={{ books, addBook, deleteBook, setBooks }}>
      {children}
    </BooksContext.Provider>
  )
}

export const useBooks = () => useContext(BooksContext)
