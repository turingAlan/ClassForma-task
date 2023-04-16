import React from "react";

const PageHeader = ({ Heading }) => {
  return (
    <div className="border-b border-sky-500 relative px-4 py-2">
      <h1 className="text-black text-left text-3xl">{Heading}</h1>
    </div>
  );
};

export default PageHeader;
