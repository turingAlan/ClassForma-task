import React from "react";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";
import WorkflowListItem from "../components/WorkflowListItem";
import WorkflowList from "../components/WorkflowList";

const Home = () => {
  return (
    <div className="min-h-screen min-w-full">
      <PageHeader Heading="Workflows" />
      <WorkflowList />
    </div>
  );
};

export default Home;
