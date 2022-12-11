import styled from "styled-components";
import { useEffect, useState } from "react";
import Card from "./Card";

interface CardListProps {
  currentIndex: number;
}

const CardListBlock = styled.div<CardListProps>`
  width: 100vw;
  height: 560px;
  position: fixed;
  top: 60px;
  left: calc((100vw - 300px) / 2 - 40px);
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-left: 40px;

  transform: ${({ currentIndex }) => `translateX(-${currentIndex * 320}px)`};
  transition: all 0.3s ease-in-out;
`;

export default function CardList({ documents }: any) {
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

    if (distanceX > 30 && vector > 2) {
      handleNextBtn();
    } else if (distanceX < -30 && vector > 2) {
      handlePrevBtn();
    }
  };

  const handleNextBtn = () => {
    console.log("prevIndex:" + currentIndex);
    if (currentIndex === maxLength) return;
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrevBtn = () => {
    console.log("prevIndex:" + currentIndex);
    if (currentIndex === 1) return;
    setCurrentIndex((prev) => prev - 1);
  };

  return (
    <CardListBlock
      currentIndex={currentIndex}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <Card />
      {documents &&
        documents.map((doc: any) => {
          return <Card key={index++} doc={doc} />;
        })}
      <Card />
    </CardListBlock>
  );
}
