import React from "react";
import { useAppSelector } from "../../hooks/redux-hooks";

import { ReactComponent as HeartSvg } from "./../../assets/heart.svg";

import "./headerTab.scss";

interface IHeaderTabProps {
  title: string;
  size: string;
}

export const HeaderTab: React.FC<IHeaderTabProps> = ({ title, size }) => {
  const currentTabSize = useAppSelector((state) => state.tabs.currentTabSize);

  const isActive = `headerTab ${currentTabSize === size &&
    "headerTab--active"}`;

  return (
    <button className={isActive}>
      <HeartSvg className="headerTab__icon" />
      <p className="headerTab__title">{title}</p>
    </button>
  );
};
