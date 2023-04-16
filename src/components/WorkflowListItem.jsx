import React from "react";
import Colors from "../constants/colors";
import { Link } from "react-router-dom";

const WorkflowListItem = ({ name, inputType, createdAt, isHeader, index }) => {
  let dateObject = new Date(createdAt);
  let date = !isHeader ? dateObject.toISOString().split("T")[0] : "Created At";
  console.log(date);
  return (
    <>
      <ul
        className="list-none flex flex-row"
        style={{
          backgroundColor: isHeader
            ? Colors.darkBlue
            : index % 2
            ? Colors.gray
            : Colors.darkGray,
          color: isHeader ? "white" : "black",
          fontWeight: isHeader ? "700" : "none",
        }}
      >
        <li
          className=" px-1 h-10 flex-1  border-r-1-white border-r-2 mr-auto text-left float-right"
          style={{
            textDecoration: !isHeader ? "underline" : null,
          }}
        >
          <Link style={{ color: isHeader ? "white" : "black" }}>{name}</Link>
        </li>
        <li className=" px-1 h-10 flex-1  border-r-1-white border-r-2 mr-auto text-left float-right">
          {inputType}
        </li>
        <li className=" px-1 h-10 flex-1 border-r-1-white mr-auto text-left float-right">
          {date}
        </li>
      </ul>
    </>
  );
};

export default WorkflowListItem;
