import { useState } from "react"
import { Book } from "./types"
import { BookForm } from "./components/Form"
import { ContainerBanner, ContainerBooks, Wrapper } from "./styles"
import { ListBooks } from "./components/ListBooks"
import { useBooks } from "../../contexts/BooksContext"
import { useFormik } from "formik"
import { formSchema } from "../../schemas"
import { useModal } from "../../contexts/ModalContext"

export function Main() {
  const { books, addBook, setBooks, deleteBook } = useBooks()
  const [search, setSearch] = useState("")
  const { modal, toggleShowModal } = useModal()

  const {
    values,
    handleChange,
    handleSubmit,
    setValues,
    resetForm,
    errors,
    touched
  } = useFormik<Book>({
    initialValues: {
      id: 0,
      title: "",
      author: "",
      description: "",
      genre: "",
      publishYear: 0,
      registerDate: ""
    },
    validationSchema: formSchema,
    onSubmit
  })

  function updateBook() {
    const newBooks = [...books]
    const bookIdx = books.findIndex(b => b.id === values.id)
    newBooks[bookIdx] = values
    setBooks(newBooks)
  }

  function onSubmit() {
    values.id !== 0
      ? updateBook()
      : addBook({
          ...values,
          registerDate: new Date().toISOString().split("T")[0],
          id: Date.now()
        })

    resetForm()
  }

  return (
    <Wrapper>
      <div className="formContainer">
        <BookForm
          book={values}
          onChange={handleChange}
          onSubmit={handleSubmit}
          errors={errors}
          touched={touched}
        />
      </div>

      <ContainerBanner>
        <h2>Estante</h2>
        <input
          type="text"
          placeholder="Digite o título, autor, gênero ou ano do livro..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </ContainerBanner>

      <ContainerBooks>
        <ListBooks books={books} onUpdate={setValues} bookProperty={search} />
      </ContainerBooks>

      <dialog>
        <p>
          Deseja realmente excluir o livro{" "}
          <span>{modal.bookToDelete.title}</span>?
        </p>
        <hr />
        <div className="containerButtons">
          <button
            className="delete"
            onClick={() => {
              deleteBook(modal.bookToDelete.id)
              toggleShowModal()
            }}
          >
            Excluir
          </button>
          <button className="cancel" onClick={toggleShowModal}>
            Cancelar
          </button>
        </div>
      </dialog>
    </Wrapper>
  )
}
