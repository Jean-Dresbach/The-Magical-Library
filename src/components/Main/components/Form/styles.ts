import styled from "styled-components"

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  margin: 50px 0;

  .invalidEntry {
    input,
    textarea {
      border: 1px solid ${({ theme }) => theme.colors.primary};
    }
    span {
      visibility: visible;
    }
  }

  input {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.inputBackground};
    border: 1px solid ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.text};
    outline: none;
  }

  span {
    display: block;
    visibility: hidden;
    font-size: 12px;
    margin: 2px 10px 5px;
    color: ${({ theme }) => theme.colors.primary};
  }

  input:is(:focus, .valid),
  textarea:is(:focus, .valid) {
    border: 1px solid ${({ theme }) => theme.colors.secondary};
  }

  textarea {
    width: 100%;
    height: 145px;
    padding: 10px;
    margin-top: 5px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.inputBackground};
    resize: none;
    border: 1px solid ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.text};
    outline: none;
  }

  textarea::-webkit-scrollbar {
    width: 0;
  }

  button {
    position: relative;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.title};
    padding: 10px 0;
    margin-top: 5px;
    border-radius: 8px;
    outline: none;
    border: none;
    cursor: pointer;

    svg {
      position: absolute;
      right: 2px;
      top: -2px;
      transform: rotate(342deg);
    }

    :nth-child(2) {
      right: 31px;
      top: 5px;
      transform: rotate(122deg);
    }
  }
`
