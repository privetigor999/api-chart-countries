import React from "react";
import { HeaderTab } from "../HeaderTab/HeaderTab";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { setCurrentTab } from "../../store/tabReducer/tabReducer";

import "./header.scss";
import { ReactComponent as EarthSvg } from "./../../assets/earth.svg";

export const Header: React.FC = React.memo(function Header() {
  const listOfTabs = useAppSelector((state) => state.tabs.listOfTabs);

  const dispatch = useAppDispatch();

  const clickTabHandler = (id: number): void => {
    dispatch(setCurrentTab(id));
  };
  return (
    <div className="header">
      <div className="header__title">
        <p className="header__title-text">
          World’s <span className="header__title-span">Population</span>{" "}
        </p>
        <EarthSvg />
      </div>
      <nav className="header__tabs">
        <ul className="header__list">
          {listOfTabs.map((tab) => (
            <li
              className="header__list-item"
              key={tab.id}
              onClick={() => clickTabHandler(tab.id)}
            >
              <HeaderTab title={tab.tabtitle} size={tab.size} />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
});
