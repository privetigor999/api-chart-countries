import React from "react";
import { useAppSelector } from "../../hooks/redux-hooks";

export const ErrorBlock: React.FC = () => {
  const errorMessage = useAppSelector((state) => state.regions.errorMessage);

  return <div>{errorMessage}</div>;
};
