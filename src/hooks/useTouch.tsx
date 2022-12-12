import { useState } from "react";

export const useTouch = (
  handleNextBtn: () => void,
  handlePrevBtn: () => void
) => {
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

  return { onTouchStart, onTouchEnd };
};
