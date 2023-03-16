import React from "react";
import { RingLoader } from "react-spinners";

import "./loading.scss";

export const Loading: React.FC = () => {
  return (
    <div className="loading">
      <RingLoader color="#c96c66" />
    </div>
  );
};
