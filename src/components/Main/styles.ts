import styled from "styled-components"
import estanteImg from "../../assets/estante.jpg"

export const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.mainBackground};

  .formContainer {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: 30px;

    form {
      z-index: 2;
    }

    > svg {
      position: absolute;
      inset: 0;
      z-index: 1;
      transform: translateX(-30%);
      width: 100%;
      height: 100%;
      fill: rgba(0, 0, 0, 0.2);
    }
  }

  dialog::backdrop {
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(5px);
  }

  dialog {
    text-align: center;
    margin: auto;
    border: none;
    border-radius: 8px;
    padding: 20px 30px;
    background-color: ${({ theme }) => theme.colors.mainBackground};

    p {
      font-size: large;
      color: ${({ theme }) => theme.colors.text};

      span {
        color: ${({ theme }) => theme.colors.primary};
      }
    }

    hr {
      margin-top: 40px;
      margin-bottom: 20px;
    }

    .containerButtons {
      display: flex;
      justify-content: start;
      gap: 10px;

      button {
        color: white;
        border: none;
        font-weight: bold;
        border-radius: 5px;
        width: 70px;
        padding: 8px 0;
        cursor: pointer;
      }

      button:hover {
        transform: scale(1.1);
      }

      .delete {
        background-color: ${({ theme }) => theme.colors.primary};
      }

      .cancel {
        background-color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }
`

export const ContainerBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 50px;
  background-image: url(${estanteImg});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  input {
    width: 300px;
    padding: 8px 15px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.inputBackground};
    color: ${({ theme }) => theme.colors.text};
    border: none;
    outline: none;
  }

  @media screen and (max-width: 600px) {
    & {
      flex-direction: column;
      gap: 10px;
    }

    input {
      width: 250px;
    }

    input::placeholder {
      font-size: 11px;
    }
  }
`

export const ContainerBooks = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  min-height: 475px;
  padding: 50px;
  gap: 30px;
  color: white;

  & > p {
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: small;
    color: ${({ theme }) => theme.colors.text};
  }

  .errorText {
    position: static;
    font-size: medium;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bolder;
  }

  @media screen and (max-width: 600px) {
    & {
      padding: 50px 30px;
    }
  }
`
