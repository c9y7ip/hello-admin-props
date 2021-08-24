import React from "react";

const Gretter = ({ name = "" }) => {
  return (
    <div>
      <p>Hello {name} </p>
    </div>
  );
};

export default Gretter;
