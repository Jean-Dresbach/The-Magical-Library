import styled from "styled-components"
import headerImg from "../../assets/library-background.jpg"

export const Wrapper = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: url(${headerImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center -180px;
  background-attachment: fixed;
  padding-left: 50px;

  .containerToggleTheme {
    position: absolute;
    top: 10px;
    right: 50px;

    input {
      width: 0;
      height: 0;
      visibility: hidden;
    }

    label {
      position: relative;
      display: block;
      width: 50px;
      height: 20px;
      background: ${({ theme }) => theme.colors.secondary};
      border-radius: 200px;
      box-shadow:
        inset 0px 5px 15px rgba(0, 0, 0, 0.4),
        inset 0px -5px 15px rgba(255, 255, 255, 0.4);
      cursor: pointer;
    }

    label:after {
      content: "";
      position: absolute;
      top: 3px;
      left: 3px;
      display: block;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: linear-gradient(180deg, #ffcc89, #d8860b);
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    }

    input:checked + label {
      background: #0b1c71;
    }

    input:checked + label:after {
      left: 0;
      transform: translateX(235%);
      background: linear-gradient(180deg, #777, #bfbfbf);
    }
    label,
    label:after {
      transition: 0.3s;
    }
  }

  @media screen and (max-width: 600px) {
    & {
      padding-left: 30px;
    }

    .containerToggleTheme {
      right: 45px;
    }
  }
`

export const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 100px 100px;
  background: linear-gradient(
    270deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(35, 35, 35, 0.8) 65%,
    rgba(78, 78, 78, 0.5) 86%,
    rgba(223, 223, 223, 0) 100%
  );
  color: ${({ theme }) => theme.colors.title};
  font-family: "Tangerine", cursive, sans-serif;
  font-size: 70px;

  :nth-child(1) {
    margin-top: -90px;
    font-size: 200px;
    text-transform: uppercase;
  }

  @media screen and (max-width: 600px) {
    & {
      font-size: 35px;
      padding: 100px 50px 100px 30px;
    }

    :nth-child(1) {
      margin-top: -50px;
      font-size: 100px;
    }
  }
`
