import { MouseEvent, useState } from "react"
import { useBooks } from "../../../../contexts/BooksContext"
import { Book } from "../../types"
import { Wrapper } from "./styles"
import editImg from "../../../../assets/edit.png"
import deleteImg from "../../../../assets/trash-can.png"
import { useModal } from "../../../../contexts/ModalContext"

interface BookItemProps {
  book: Book
  onUpdate: (book: Book) => void
}

export function BookItem({ book, onUpdate }: BookItemProps) {
  const [flip, setFlip] = useState(false)
  const { books } = useBooks()
  const { toggleShowModal, handleBookToDelete } = useModal()

  const flipBook = () => setFlip(!flip)

  function handleDelete(e: MouseEvent<HTMLButtonElement>) {
    e.stopPropagation()
    handleBookToDelete(book)
    toggleShowModal()
  }

  function handleUpdate(e: MouseEvent<HTMLAnchorElement>) {
    const targetElement = document.getElementById("form") as HTMLFormElement
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth"
      })
    }
    e.stopPropagation()
    onUpdate(book)
  }

  const defineBookColor = () => books.indexOf(book) % 10

  return (
    <Wrapper
      onClick={flipBook}
      className={flip ? "flip" : ""}
      $index={defineBookColor()}
    >
      <div className="bookInner">
        <div className="bookFront">
          <div className="titleContainer">
            <h3>{book.title}</h3>
          </div>
          <div className="infoContainer">
            <div className="authorContainer">
              <span>Por</span>
              <h4>{book.author}</h4>
            </div>
            <span>{book.publishYear}</span>
          </div>
        </div>

        <div className="bookBack">
          <div>
            <p>{book.description}</p>
          </div>
          <span>{book.genre}</span>
        </div>

        <div className="bookPages"></div>
        <a href="#form" onClick={handleUpdate} className="edit">
          <img src={editImg} alt="Editar" />
        </a>
        <button onClick={handleDelete} className="delete">
          <img src={deleteImg} alt="Excluir" />
        </button>
      </div>
    </Wrapper>
  )
}
