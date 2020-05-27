import React from "react";

const ProgressBar = ({
  scaleX,
  activeColorPrimary = "#6a11cb",
  activeColorSecondary = "#2575fc",
}) => {
  const backgroundPosition = parseFloat((scaleX * 100).toFixed(2));

  return (
    <div className="main">
      <style jsx="true">
        {`
          .main {
            width: 100%;
            height: 4px;
            background-color: ${activeColorPrimary};
            background-image: linear-gradient(
              to right,
              ${activeColorPrimary} 50%,
              ${activeColorSecondary} 100%
            );
            background-size: 200%;
            background-position: ${backgroundPosition}% 0;
            // chrome has issues with background-image flashing
            // backface-visibility fixed it
            backface-visibility: hidden;
            transform: scaleX(${scaleX});
            transform-origin: left;
            transition: transform 1300ms ease-in-out,
              background-position 1300ms ease-in;
          }
        `}
      </style>
    </div>
  );
};

export default ProgressBar;
