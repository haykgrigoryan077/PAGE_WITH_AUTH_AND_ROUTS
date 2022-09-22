import { Spin } from "antd";
import React from "react";

const FullScreenLoading = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spin  />
    </div>
  );
};

export default FullScreenLoading;
