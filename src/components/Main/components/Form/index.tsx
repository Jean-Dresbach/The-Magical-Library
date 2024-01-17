import { FormikErrors, FormikTouched } from "formik"
import { Book } from "../../types"
import { Wrapper } from "./styles"

interface BookFormProps {
  book: Book
  errors: FormikErrors<Book>
  touched: FormikTouched<Book>
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export function BookForm({
  book,
  errors,
  touched,
  onChange,
  onSubmit
}: BookFormProps) {
  function toggleErrorClass(name: string) {
    const InputName = name as keyof Book
    return errors[InputName] && touched[InputName] ? "invalidEntry" : ""
  }

  function defineErrorSpanMessage(name: string) {
    const InputName = name as keyof Book
    return errors[InputName] ? errors[InputName] : "Sem erros"
  }

  const defineButtonInnerText = (id: number) =>
    id === 0 ? "Adicionar livro" : "Atualizar livro"

  return (
    <Wrapper id="form'" onSubmit={onSubmit}>
      <label className={toggleErrorClass("title")}>
        Título
        <input
          onChange={onChange}
          type="text"
          placeholder="Digite o título..."
          name="title"
          value={book.title}
          id="title"
        />
        <span>{defineErrorSpanMessage("title")} </span>
      </label>

      <label className={toggleErrorClass("author")}>
        Autor
        <input
          onChange={onChange}
          type="text"
          placeholder="Digite o autor..."
          name="author"
          value={book.author}
          id="author"
        />
        <span>{defineErrorSpanMessage("author")}</span>
      </label>

      <label className={toggleErrorClass("genre")}>
        Gênero
        <input
          onChange={onChange}
          type="text"
          placeholder="Digite o gênero..."
          name="genre"
          value={book.genre}
          id="genre"
        />
        <span>{defineErrorSpanMessage("genre")}</span>
      </label>

      <label className={toggleErrorClass("description")}>
        Descrição Breve
        <textarea
          onChange={onChange}
          placeholder="Digite uma breve descrição..."
          name="description"
          value={book.description}
          maxLength={600}
          id="description"
        />
        <span>{defineErrorSpanMessage("description")}</span>
      </label>

      <label className={toggleErrorClass("publishYear")}>
        Ano de Publicação
        <input
          onChange={onChange}
          placeholder="Digite o ano de publicação..."
          type="number"
          name="publishYear"
          value={book.publishYear}
          id="publishYear"
        />
        <span>{defineErrorSpanMessage("publishYear")}</span>
      </label>

      <button type="submit">
        {defineButtonInnerText(book.id)}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="#0165a5"
          viewBox="0 0 16 16"
        >
          <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
        </svg>
      </button>
    </Wrapper>
  )
}
