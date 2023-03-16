import React from "react";

import "./paginator.scss";

interface IPaginatorProps {
  regionsPerPage: number;
  totalRegions: number;
  paginate: (pageNum: number) => void;
  currentPage: number;
}
export const Paginator: React.FC<IPaginatorProps> = ({
  regionsPerPage,
  totalRegions,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRegions / regionsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="paginator">
      <ul className="paginator__list">
        {pageNumbers.map((num, i) => (
          <li key={i} className="paginator__item">
            <button
              onClick={() => paginate(num)}
              className={`paginator__button ${num === currentPage &&
                "paginator__button--active"}`}
            >
              {num}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
