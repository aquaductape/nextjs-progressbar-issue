import Primary from "../containers/Primary";
import Secondary from "../containers/Secondary";
import MainProgressBar from "../containers/MainProgressBar";
import React, { useState } from "react";

export default function Home() {
  const [list] = useState([{ id: 5 }, { id: 10 }, { id: 20 }]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const onNext = () => {
    if (isFinished) return;

    if (currentIdx === list.length - 1) {
      setIsFinished(true);
    }
    setCurrentIdx((prev) => prev + 1);
  };
  return (
    <div className="App">
      <MainProgressBar
        total={list.length}
        currentIdx={currentIdx}
      ></MainProgressBar>
      {!isFinished ? (
        <Primary onNext={onNext}></Primary>
      ) : (
        <Secondary></Secondary>
      )}
    </div>
  );
}
