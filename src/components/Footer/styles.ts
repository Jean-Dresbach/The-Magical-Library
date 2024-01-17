import styled from "styled-components"

export const Wrapper = styled.footer`
  padding-bottom: 50px;
  background-color: ${({ theme }) => theme.colors.mainBackground};
  text-align: center;

  span {
    font-weight: bolder;
    font-size: large;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
    font-weight: bold;
  }

  a:hover {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.secondary};
  }
`
