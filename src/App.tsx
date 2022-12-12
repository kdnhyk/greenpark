import "./App.css";
import styled from "styled-components";
import { useCollection } from "./hooks/useCollection";
import CardList from "./components/CardList";

const Main = styled.main`
  /* -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  } */
`;

export default function App() {
  const { documents } = useCollection("Board");

  return (
    <>
      <Main>
        <CardList documents={documents} />
      </Main>
    </>
  );
}
