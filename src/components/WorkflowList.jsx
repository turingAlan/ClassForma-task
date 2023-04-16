import React, { useEffect, useState } from "react";
import WorkflowListItem from "./WorkflowListItem";
import { GetWorkFlowList } from "../api/Call";

function WorkflowList() {
  const [workFlowArray, setWorkFlowArray] = useState([]);

  useEffect(() => {
    GetWorkFlowList(setWorkFlowArray);
  }, []);

  return (
    <div className="pl-10 pt-10 w-2/4">
      <WorkflowListItem
        name="Name"
        inputType="Input Type"
        createdAt="Created at"
        isHeader={true}
      />
      {workFlowArray?.map((item, index) => {
        return (
          <WorkflowListItem
            name={item.name}
            inputType={item.input_type}
            index={index}
            createdAt={item.createdAt}
            isHeader={false}
          />
        );
      })}
    </div>
  );
}

export default WorkflowList;
