import React from "react";
import ProgressBar from "../components/ProgressBar";

const MainProgressBar = ({ currentIdx, total }) => {
  const completion = parseFloat((currentIdx / total).toFixed(2)) || 0;
  const scaleX = completion;

  return (
    <div className="bar">
      <ProgressBar scaleX={scaleX} key={1}></ProgressBar>
      <style jsx="true">
        {`
          .bar {
            position: sticky;
            top: 0;
            left: 0;
            width: 100%;
            margin-bottom: 15px;
            z-index: 200;
            transition: transform 300ms ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default MainProgressBar;
