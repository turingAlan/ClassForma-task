import React, { useEffect, useState } from "react";
import { GetModules } from "../api/Call";
import Module from "./Module";
import { Draggable } from "react-beautiful-dnd";

const ModuleContainer = ({ pageNumber }) => {
  const [Modules, setModules] = useState([]);

  useEffect(() => {
    GetModules(pageNumber, 5, setModules);
  }, [pageNumber]);
  console.log(Modules);
  return (
    <div className="flex justify-center flex-col w-full justify-items-center items-center">
      {Modules.map((item, index) => {
        return (
          <Module
            data={{
              label: item.name,
              input: item.input_type.toUpperCase(),
              output: item.output_type.toUpperCase(),
              key: index,
              index: index,
              id: `${index}`,
              onCanvas: false,
            }}
          />
        );
      })}
    </div>
  );
};

export default ModuleContainer;
