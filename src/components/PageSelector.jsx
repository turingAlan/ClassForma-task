import React, { useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const PageSelector = ({ currentPage, setCurrentPage }) => {
  const [pageList, setPageList] = useState([1, 2, 3]);
  return (
    <div className="absolute bottom-4 flex flex-row px-8 w-full justify-center content-center items-center">
      <div
        onClick={() => {
          pageList[0] > 1
            ? setPageList((prevState) => prevState.map((value) => value - 1))
            : null;
        }}
      >
        <FaAngleLeft color="black" size={21} className="hover:fill-white" />
      </div>
      <div className="flex justify-around w-1/3">
        {pageList.map((value) => {
          return (
            <h2
              key={value}
              onClick={(e) => {
                setCurrentPage(parseInt(e.target.innerText));
              }}
              style={{ color: value === currentPage ? "white" : null }}
              className="hover:text-white select-none text-lg font-semibold"
            >
              {value}
            </h2>
          );
        })}
      </div>
      <div
        onClick={() => {
          pageList[2] < 20
            ? setPageList((prevState) => prevState.map((value) => value + 1))
            : null;
        }}
      >
        <FaAngleRight color="black" size={21} className="hover:fill-white" />
      </div>
    </div>
  );
};

export default PageSelector;
