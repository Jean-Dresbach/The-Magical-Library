import { Book } from "../../types"
import { BookItem } from "../BookItem"

interface ListBooksProps {
  books: Book[]
  onUpdate: (book: Book) => void
  bookProperty: string
}

export function ListBooks({ books, onUpdate, bookProperty }: ListBooksProps) {
  function handleFilterCondition(book: Book) {
    const excludedProperties = ["id", "registerDate"]

    let searchString = ""

    Object.keys(book).forEach(item => {
      const key = item as keyof Book

      if (!excludedProperties.some(i => key === i)) {
        searchString += book[key]
      }
    })

    return searchString.includes(bookProperty)
  }

  function renderNoBooksMessage(message: string) {
    return <p className="errorText">{message}</p>
  }

  function renderBookItems(books: Book[]) {
    return (
      <>
        <p>Clique em um livro para mais detalhes!</p>
        {books.map(book => (
          <BookItem key={book.id} book={book} onUpdate={onUpdate} />
        ))}
      </>
    )
  }

  function showBooks() {
    if (bookProperty) {
      const filteredBooks = books.filter(book => handleFilterCondition(book))
      return filteredBooks.length === 0
        ? renderNoBooksMessage("Nenhum livro encontrado!")
        : renderBookItems(filteredBooks)
    } else {
      return books.length === 0
        ? renderNoBooksMessage("Nenhum livro na estante")
        : renderBookItems(books)
    }
  }

  return showBooks()
}
