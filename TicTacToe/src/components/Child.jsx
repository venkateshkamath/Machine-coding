import React from "react";

const Child = () => {
  console.log("Children");
  return <div>Child</div>;
};

export default React.memo(Child);
