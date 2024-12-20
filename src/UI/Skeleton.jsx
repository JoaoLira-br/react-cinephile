import React from "react";

const Skeleton = ({ width, minWidth, height, borderRadius, margin, display }) => {
  return (
    <div
      className="skeleton-box"
      style={{
        width,
        height,
        borderRadius,
        margin,
        display
      }}
    ></div>
  );
};

export default Skeleton;
