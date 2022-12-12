import "./App.css";
import styled from "styled-components";
import { useCollection } from "./hooks/useCollection";
import CardList from "./components/CardList";
import loading from "./assets/loading.gif";

const Main = styled.main`
  /* -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  } */
  .Copyright {
    width: fit-content;
    text-align: center;
    position: absolute;
    bottom: 10px;
    left: calc(50% - 50px);
    p {
      font-size: 12px;
    }
  }
  .Loading {
    position: absolute;
    top: calc(50%);
    left: calc(50% - 25px);
    span {
      display: inline-block;
      width: 10px;
      height: 10px;
      background-color: gray;
      border-radius: 50%;
      animation: loading 1s linear infinite;
      background-color: black;
    }
    .Dot1 {
      animation-delay: 0s;
    }
    .Dot2 {
      animation-delay: 0.2s;
      margin: 0px 10px;
    }
    .Dot3 {
      animation-delay: 0.4s;
    }
    @keyframes loading {
      0%,
      100% {
        opacity: 0;
        transform: scale(0.5);
      }
      50% {
        opacity: 1;
        transform: scale(1.2);
      }
    }
  }
`;

export default function App() {
  const { documents } = useCollection("Board");

  return (
    <>
      <Main>
        {documents ? (
          <CardList documents={documents} />
        ) : (
          <div className="Loading">
            <span className="Dot1"></span>
            <span className="Dot2"></span>
            <span className="Dot3"></span>
          </div>
        )}

        {/* <div className="Copyright">
          <p> Copyright 2022. kdnhyk@gmail.com All rights reserved.</p>
        </div> */}
      </Main>
    </>
  );
}
