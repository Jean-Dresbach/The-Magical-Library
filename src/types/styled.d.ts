import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    title: string
    colors: {
      primary: string
      secondary: string
      bodyBackground: string
      mainBackground: string
      inputBackground: string
      boxShadow: string
      text: string
      title: string
      bookBackground: string[]
    }
  }
}
