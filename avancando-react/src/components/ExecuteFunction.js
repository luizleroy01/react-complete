import React from "react";

const ExecuteFunction = ({ myFunction }) => {
  return (
    <div>
      ExecuteFunction
      <button onClick={myFunction}>Clique</button>
    </div>
  );
};

export default ExecuteFunction;
