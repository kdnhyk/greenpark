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
const Background = styled.div`
  position: fixed;
  bottom: 40px;
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
        {/* <svg
          width="200"
          height="394"
          viewBox="0 0 200 394"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M51.7638 393.185C77.1333 386.387 100.915 374.659 121.752 358.671C142.589 342.682 160.073 322.746 173.205 300C186.337 277.254 194.861 252.145 198.289 226.105C201.717 200.066 199.983 173.606 193.185 148.236C186.387 122.867 174.659 99.0846 158.671 78.2477C142.682 57.4108 122.746 39.9271 100 26.7949C77.2543 13.6627 52.1449 5.1392 26.1052 1.71102C0.0654947 -1.71716 -26.3944 0.017123 -51.7639 6.81485L-12.4233 153.636C-6.33467 152.004 0.0157187 151.588 6.26524 152.411C12.5148 153.233 18.541 155.279 24 158.431C29.4589 161.582 34.2437 165.779 38.081 170.779C41.9183 175.78 44.733 181.488 46.3644 187.577C47.9959 193.665 48.4121 200.016 47.5894 206.265C46.7666 212.515 44.7209 218.541 41.5692 224C38.4175 229.459 34.2214 234.244 29.2206 238.081C24.2197 241.918 18.512 244.733 12.4233 246.364L51.7638 393.185Z"
            fill="#20430F"
          />
        </svg> */}
      </Background>
    </>
  );
}
