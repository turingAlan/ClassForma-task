import React, { memo } from "react";
import Colors from "../constants/colors";
import { Draggable } from "react-beautiful-dnd";
import { Handle, Position } from "reactflow";

export default memo(({ data, onCanvas }) => {
  return (
    <>
      {onCanvas ? (
        <Handle
          type="target"
          id={data.index}
          position={Position.Left}
          style={{
            background: "black",
            width: "5px",
            height: "5px",
            borderRadius: "50%",
            position: "relative",
            top: "40px",
            zIndex: 100000,
          }}
          onConnect={(params) => console.log("handle onConnect", params)}
          isConnectable={true}
        />
      ) : null}
      <div
        // ref={provided.innerRef}
        // {...provided.draggableProps}
        // {...provided.dragHandleProps}
        className="border border-blue-500 rounded-md  justify-around flex h-12 my-6 w-11/12 max-w-sm"
        draggable
        key={data.key}
      >
        <div className="border-r border-blue-500 w-1/6 content-center flex flex-wrap justify-center font-bold text-2xl">
          {data.input}
        </div>
        <div
          className="flex-1 content-center flex flex-wrap justify-center font-medium text-m text-slate-400"
          style={{ backgroundColor: Colors.lightestBlue }}
        >
          {data.label}
        </div>
        <div className="border-l border-blue-500 w-1/6 content-center flex flex-wrap justify-center font-bold text-2xl">
          {data.output}
        </div>
      </div>
      {onCanvas ? (
        <Handle
          type="source"
          id={data.index + 1}
          position={Position.Right}
          style={{ background: "black" }}
          onConnect={(params) => console.log("handle onConnect", params)}
          isConnectable={true}
        />
      ) : null}
    </>
  );
});

// import React, { memo } from "react";
// import { Handle, Position } from "reactflow";

// export default memo(({ data, isConnectable }) => {
//   return (
//     <>
//       <Handle
//         type="target"
//         position={Position.Left}
//         style={{ background: "#555" }}
//         onConnect={(params) => console.log("handle onConnect", params)}
//         isConnectable={isConnectable}
//       />
//       <div>
//         Custom Color Picker Node: <strong>{data.color}</strong>
//       </div>
//       <input
//         className="nodrag"
//         type="color"
//         onChange={data.onChange}
//         defaultValue={data.color}
//       />
//       <Handle
//         type="source"
//         position={Position.Right}
//         id="a"
//         style={{ top: 10, background: "#555" }}
//         isConnectable={isConnectable}
//       />
//       <Handle
//         type="source"
//         position={Position.Right}
//         id="b"
//         style={{ bottom: 10, top: "auto", background: "#555" }}
//         isConnectable={isConnectable}
//       />
//     </>
//   );
// });
