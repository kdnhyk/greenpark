import "./App.css";
import styled from "styled-components";
import { useCollection } from "./hooks/useCollection";
import React from "react";
import CardList from "./CardList";

const Main = styled.main`
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  /* -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  } */
`;

const Background = styled.div`
  position: fixed;
  bottom: 100px;
  z-index: -1;
`;

export default function App() {
  const { documents } = useCollection("Board");

  return (
    <>
      <Main>
        <CardList documents={documents} />
      </Main>

      <Background>
        <svg
          width="200"
          height="400"
          viewBox="0 0 200 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-1.52588e-05 400C26.2644 400 52.2716 394.827 76.5367 384.776C100.802 374.725 122.85 359.993 141.421 341.421C159.993 322.85 174.725 300.802 184.776 276.537C194.827 252.272 200 226.264 200 200C200 173.736 194.827 147.728 184.776 123.463C174.725 99.1982 159.993 77.1503 141.421 58.5786C122.85 40.0069 100.802 25.275 76.5367 15.2241C52.2715 5.17314 26.2643 -7.40996e-06 -6.10352e-05 0L0 200L-1.52588e-05 400Z"
            fill="#20430F"
          />
        </svg>
      </Background>
    </>
  );
}
