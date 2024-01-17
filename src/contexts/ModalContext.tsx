import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState
} from "react"
import { Book } from "../components/Main/types"

interface Modal {
  bookToDelete: Book
  isOpen: boolean
}

interface IModalContext {
  modal: Modal
  toggleShowModal: () => void
  handleBookToDelete: (book: Book) => void
}

const ModalContext = createContext<IModalContext>({} as IModalContext)

interface ModalContextProviderProps {
  children: ReactNode
}

const modalInitialState: Modal = {
  bookToDelete: {} as Book,
  isOpen: false
}

export function ModalContextProvider({ children }: ModalContextProviderProps) {
  const [modal, setModal] = useState<Modal>(modalInitialState)

  function toggleShowModal() {
    const myModal = document.querySelector("dialog") as HTMLDialogElement
    modal.isOpen ? myModal.close() : myModal.showModal()

    setModal(prevState => ({ ...prevState, isOpen: !prevState.isOpen }))
  }

  function handleBookToDelete(book: Book) {
    setModal(prevState => ({ ...prevState, bookToDelete: book }))
  }

  return (
    <ModalContext.Provider
      value={{ modal, toggleShowModal, handleBookToDelete }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = () => useContext(ModalContext)
