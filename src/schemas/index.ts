import * as yup from "yup"

const requiredMessage = "Campo obrigatório!"
const maxDescriptionMessage = "Máximo de caracteres atingido"
const positiveIntegerMessage =
  "O ano de publicação deve ser um número positivo e inteiro!"
const maxPublishYearMessage =
  "O ano de publicação não pode ser maior que o ano atual!"

export const formSchema = yup.object().shape({
  id: yup.number(),
  title: yup.string().required(requiredMessage),
  author: yup.string().required(requiredMessage),
  description: yup
    .string()
    .max(600, maxDescriptionMessage)
    .required(requiredMessage),
  genre: yup.string().required(requiredMessage),
  publishYear: yup
    .number()
    .positive(positiveIntegerMessage)
    .integer(positiveIntegerMessage)
    .max(new Date().getFullYear(), maxPublishYearMessage)
    .required(requiredMessage),
  registerDate: yup.date()
})
