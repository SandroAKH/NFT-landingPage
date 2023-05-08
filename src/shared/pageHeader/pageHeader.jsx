import React from "react";
import "./pageHeader.scss";

export const PageHeader = ({ title, subTitle }) => {
  return (
    <div className="page-header">
    <h3 children={title} />
      {subTitle && <h4 children={subTitle} />}
    </div>
  );
};
