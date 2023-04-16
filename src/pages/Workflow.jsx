import React, { useEffect, useRef, useState } from "react";

import PageHeader from "../components/PageHeader";
import { GetModules, GetUserData } from "../api/Call";
import Module from "../components/Module";
import ModuleContainer from "../components/ModuleContainer";
import PageSelector from "../components/PageSelector";
import {
  Controls,
  ReactFlow,
  ReactFlowProvider,
  useEdgesState,
  useNodesState,
} from "reactflow";

const CostumModule = ({ data }) => {
  return <Module onCanvas={true} data={data} />;
};

const nodeType = {
  input: CostumModule,
};

const initialNodes = [
  {
    id: "1",
    type: "input",
    data: { label: "An input node", input: "A", output: "B" },
    position: { x: 0, y: 50 },
    sourcePosition: "right",
  },
  {
    id: "2",
    type: "input",
    data: { label: "random", input: "A", output: "B" },
    position: { x: 300, y: 50 },
  },
  {
    id: "3",
    type: "input",
    data: { label: "Output A", input: "A", output: "B" },
    position: { x: 650, y: 25 },
    targetPosition: "left",
  },
  {
    id: "4",
    type: "input",
    data: { label: "Output B", input: "A", output: "B" },
    position: { x: 650, y: 100 },
    targetPosition: "left",
  },
];

const Workflow = () => {
  const id = 19;
  const [currentPage, setCurrentPage] = useState(1);
  const [name, setName] = useState("");
  const [inputType, setInputType] = useState("");
  const reactFlowWrapper = useRef(null);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);

  // const onDragEnd = (result, columns, setColumns) => {
  //   if (!result.destination) return;
  //   const { source, destination } = result;
  //   if (source.droppableId !== destination.droppableId) {
  //     const sourceColumn = columns[source.droppableId];
  //     const destColumn = columns[destination.droppableId];
  //     const sourceItems = [...sourceColumn.items];
  //     const destItems = [...destColumn.items];
  //     const [removed] = sourceItems.splice(source.index, 1);
  //     destItems.splice(destination.index, 0, removed);
  //     setColumns({
  //       ...columns,
  //       [source.droppableId]: {
  //         ...sourceColumn,
  //         items: sourceItems,
  //       },
  //       [destination.droppableId]: {
  //         ...destColumn,
  //         items: destItems,
  //       },
  //     });
  //   } else {
  //     const column = columns[source.droppableId];
  //     const copiedItems = [...column.items];
  //     const [removed] = copiedItems.splice(source.index, 1);
  //     copiedItems.splice(destination.index, 0, removed);
  //     setColumns({
  //       ...columns,
  //       [source.droppableId]: {
  //         ...column,
  //         items: copiedItems,
  //       },
  //     });
  //   }
  // };

  const getInitialInput = (input) => {
    setInputType(input);
    setNodes([
      {
        id: "1",
        type: "input",
        data: { label: "An input node", input: input, output: "B" },
        position: { x: 0, y: 50 },
        sourcePosition: "right",
      },
      ...initialNodes,
    ]);
  };

  useEffect(() => {
    GetUserData(id, setName, getInitialInput);
    setEdges([
      {
        id: "e1-2",
        source: "1",
        target: "2",
        animated: true,
        style: { stroke: "#fff" },
      },
      {
        id: "e2a-3",
        source: "2",
        target: "3",
        sourceHandle: "a",
        animated: false,
        style: { stroke: "#fff" },
      },
      {
        id: "e2b-4",
        source: "2",
        target: "4",
        animated: true,
        style: { stroke: "#fff" },
      },
    ]);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <PageHeader Heading={"Workflow name: " + name} />
      <ReactFlowProvider>
        {/* <DragDropContext onDragEnd={onDragEnd}> */}
        <div className="flex flex-row flex-1">
          <div className="bg-slate-800 w-3/12 min-h-full relative ">
            <div className="border-b h-16 text-xl pt-3 text-white text-left px-4 border-blue-500">
              Modules
            </div>
            {/* <Droppable droppableId="first"> */}
            <div
            //  ref={provided.innerRef} {...provided.droppableProps}
            >
              <ModuleContainer pageNumber={currentPage} />
            </div>
            {/* {(provided) => (
              )} */}
            {/* </Droppable> */}
            <PageSelector
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
          {/* <Droppable droppableId="workArea">
            {(provided) => ( */}
          <div
            // ref={provided.innerRef}
            // {...provided.droppableProps}
            className="bg-sky-400 w-9/12 min-h-full"
          >
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              nodeTypes={nodeType}
              // onConnect={onConnect}
              // onInit={setReactFlowInstance}
              // onDrop={onDrop}
              // onDragOver={onDragOver}
              fitView
            >
              <Controls />
            </ReactFlow>
          </div>
          {/* )}
          </Droppable> */}
        </div>
        {/* </DragDropContext> */}
      </ReactFlowProvider>
    </div>
  );
};

export default Workflow;
