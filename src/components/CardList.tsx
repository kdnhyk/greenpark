import styled from "styled-components";
import { useEffect, useState } from "react";
import Card from "./Card";

interface CardListProps {
  currentIndex: number;
}

const CardListBlock = styled.div<CardListProps>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 120px;
  left: calc((100vw - 300px) / 2 - 0px);
  display: flex;
  flex-direction: row;
  gap: 20px;

  margin-left: ${({ currentIndex }) => `-${currentIndex * 320}px`};
  transition: margin 0.3s ease-in-out;
`;

const CurrnetIndexBlock = styled.div`
  position: fixed;
  top: 12px;
  right: 8px;
  p {
    color: white;
    font-weight: bold;
    /* -webkit-text-stroke: 1px black; */
  }
`;

export default function CardList({ documents }: any) {
  const vh = window.innerHeight * 0.01;

  const [maxLength, setMaxLength] = useState<number | undefined>();
  let index = 1;
  useEffect(() => {
    if (!documents) return;
    setMaxLength(documents.length);
    console.log("maxLen: " + maxLength);
  }, [documents, maxLength]);

  const [currentIndex, setCurrentIndex] = useState(1);
  const [tochedX, setTochedX] = useState(0);
  const [tochedY, setTochedY] = useState(0);

  const onTouchStart = (e: React.TouchEvent) => {
    setTochedX(e.changedTouches[0].pageX);
    setTochedY(e.changedTouches[0].pageY);
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const distanceX = tochedX - e.changedTouches[0].pageX;
    const distanceY = tochedY - e.changedTouches[0].pageY;
    const vector = Math.abs(distanceX / distanceY);

    if (distanceX > 10 && vector > 2) {
      handleNextBtn();
    } else if (distanceX < -10 && vector > 2) {
      handlePrevBtn();
    }
  };

  const handleNextBtn = () => {
    console.log("prevIndex:" + currentIndex);
    if (maxLength && currentIndex >= maxLength) return;
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrevBtn = () => {
    console.log("prevIndex:" + currentIndex);
    if (maxLength && currentIndex <= 1) return;
    setCurrentIndex((prev) => prev - 1);
  };

  // const [mouseDownClientX, setMouseDownClientX] = useState(0);
  // const [mouseDownClientY, setMouseDownClientY] = useState(0);
  // const [mouseUpClientX, setMouseUpClientX] = useState(0);
  // const [mouseUpClientY, setMouseUpClientY] = useState(0);

  // const onMouseDown = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
  //   setMouseDownClientX(e.clientX);
  //   setMouseDownClientY(e.clientY);
  // };
  // const onMouseUp = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
  //   setMouseUpClientX(e.clientX);
  //   setMouseUpClientY(e.clientY);
  // };
  // useEffect(() => {
  //   const dragSpaceX = Math.abs(mouseDownClientX - mouseUpClientX);
  //   const dragSpaceY = Math.abs(mouseDownClientY - mouseUpClientY);
  //   const vector = dragSpaceX / dragSpaceY;

  //   if (mouseDownClientX !== 0 && dragSpaceX > 10 && vector > 2) {
  //     if (mouseUpClientX < mouseDownClientX) {
  //       handleNextBtn();
  //     } else if (mouseUpClientX > mouseDownClientX) {
  //       handlePrevBtn();
  //     }
  //   }
  // }, [mouseUpClientX]);

  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const width = window.innerWidth;
    const value = e.clientX - width / 2;
    if (value >= 0) {
      if (value >= 320) {
        handleNextBtn();
      }
      handleNextBtn();
    } else if (value < 0) {
      if (value <= -320) {
        handlePrevBtn();
      }
      handlePrevBtn();
    }
  };

  return (
    <CardListBlock
      currentIndex={currentIndex}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      // onMouseDown={onMouseDown}
      // onMouseUp={onMouseUp}
      onClick={onClick}
    >
      <Card vh={vh} />
      {documents &&
        documents.map((doc: any) => {
          return <Card key={index++} doc={doc} vh={vh} />;
        })}
      <Card vh={vh} />
      <CurrnetIndexBlock>
        {/* <p>
          {currentIndex}/{maxLength}
        </p> */}
      </CurrnetIndexBlock>
    </CardListBlock>
  );
}
