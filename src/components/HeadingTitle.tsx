import React from "react";

// @ts-ignore
const HeadingTitle: React.StatelessComponent = ({ children }) => {
  return <h1 className={"text-2xl font-bold"}>{children}</h1>;
};

export default HeadingTitle;
