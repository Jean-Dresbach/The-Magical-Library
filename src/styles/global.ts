import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
        scroll-padding: 50px;
    }

    body {
        background-color: ${({ theme }) => theme.colors.bodyBackground};
        color: ${({ theme }) => theme.colors.text};
        max-width: 1200px;
        margin: auto;
        box-shadow: 0 0 21px 10px ${({ theme }) => theme.colors.boxShadow};
        font-family: Arial, Helvetica, sans-serif;
        
    }

    h1, h2, h3, h4 {
        font-family: 'Tangerine', cursive, sans-serif;
        color: ${({ theme }) => theme.colors.title};
    }

    h1, h2 {
        font-size: 80px;
        text-align: center;
    }

    .flip {
    .bookInner {
      transform: rotateY(-180deg);
    }
  }

  @media screen and (max-width: 600px) {
    h1, h2 {
        font-size: 50px; 
    }
  }
`
