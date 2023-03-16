import React from "react";
import { useAppSelector } from "../../hooks/redux-hooks";
import { Chart } from "../Chart/Chart";
import { v4 as uuidv4 } from "uuid";
import { Paginator } from "../Paginator/Paginator";

import "./field.scss";

export const Field: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [regionsPerPage] = React.useState<number>(3);

  const regions = useAppSelector((state) => state.regions.regions);
  const currentTabSize = useAppSelector((state) => state.tabs.currentTabSize);

  const classField = `field ${currentTabSize === "big" && "field--big"}`;

  const lastRegionIndex = currentPage * regionsPerPage;
  const firstRegionIndex = lastRegionIndex - regionsPerPage;
  const currentRegion = regions.slice(firstRegionIndex, lastRegionIndex);
  const listOfRegions = currentTabSize === "big" ? currentRegion : regions;

  const paginate = (pageNum: number): void => {
    setCurrentPage(pageNum);
  };

  return (
    <div className={classField}>
      <div className="field__list">
        {listOfRegions?.map((region) => (
          <Chart
            key={uuidv4()}
            region={region.region}
            countries={region.countries}
          />
        ))}
      </div>

      {currentTabSize === "big" && (
        <Paginator
          regionsPerPage={regionsPerPage}
          totalRegions={regions.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      )}
    </div>
  );
};
