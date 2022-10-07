import React from "react";
import { useHistory } from "react-router-dom";

const ComponentsTopic = () => {
  let history = useHistory();

  const backFn = () => {
    history.goBack();
  };

  return (
    <div id="components-div">
      <h3>Components in React</h3>
      <button id="components-back-button" onClick={backFn}>
        Back
      </button>
    </div>
  );
};

export default ComponentsTopic;
