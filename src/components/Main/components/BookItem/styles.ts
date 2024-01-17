import styled from "styled-components"
import pagesTexture from "../../../../assets/textura-de-paginas.jpg"

interface WrapperProps {
  $index: number
}

export const Wrapper = styled.div<WrapperProps>`
  width: 250px;
  height: 375px;
  margin-bottom: 40px;
  perspective: 1000px;
  cursor: pointer;

  .bookInner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 1.5s ease-in-out;
    transform-style: preserve-3d;
    border-radius: 0 8px 8px 0;
    background-color: ${props =>
      props.theme.colors.bookBackground[props.$index]};

    .bookFront,
    .bookBack {
      position: absolute;
      inset: 0;
      display: flex;
    }

    .bookFront {
      flex-direction: column;
      padding: 30px;

      .titleContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-grow: 6;

        h3 {
          font-size: 35px;
          text-align: center;
        }
      }

      .infoContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-grow: 4;

        .authorContainer {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          flex-grow: 2;

          h4 {
            font-size: 28px;
          }
        }

        .infoContainer > span {
          flex-grow: 1;
        }
      }
    }

    .bookPages {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      display: block;
      width: 30px;
      background-image: url(${pagesTexture});
      background-size: contain;
      transform: rotateY(-90deg) translateX(-15px) translateZ(-5px);
    }

    .bookBack {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 10px;
      padding: 30px;
      border-radius: 8px 0 0 8px;
      background-color: ${props =>
        props.theme.colors.bookBackground[props.$index]};
      text-align: justify;
      transform: rotateY(-180deg) translateZ(30px);

      div {
        flex-grow: 1;
      }

      p {
        font-size: 12px;
      }

      p::first-letter {
        font-family: "Tangerine", cursive, sans-serif;
        text-transform: uppercase;
        font-size: 30px;
        margin-right: 3px;
        margin-left: 10px;
      }

      span {
        font-size: 12px;
        font-weight: bold;
      }
    }

    .edit,
    .delete {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: end;
      padding: 0 8px 8px;
      border: none;
      outline: none;
      background-color: transparent;
      cursor: pointer;

      img {
        width: 15px;
      }
    }

    .edit {
      background-color: ${({ theme }) => theme.colors.secondary};
      bottom: -35px;
      right: 90px;
      height: 35px;
      transform: translateZ(-7px);
    }

    .edit:hover {
      bottom: -40px;
      height: 40px;
      transition: all 0.2s ease-in-out;
    }

    .delete {
      background-color: ${({ theme }) => theme.colors.primary};
      left: 90px;
      bottom: -30px;
      height: 30px;
      transform: translateZ(-10px);
    }

    .delete:hover {
      bottom: -35px;
      height: 35px;
      transition: all 0.2s ease-in-out;
    }
  }
`
