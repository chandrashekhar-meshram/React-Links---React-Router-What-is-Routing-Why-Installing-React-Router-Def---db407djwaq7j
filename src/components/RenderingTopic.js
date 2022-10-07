import React from "react";
import { useHistory } from "react-router-dom";

const RenderingTopic = () => {
  let history = useHistory();

  const backFn = () => {
    history.goBack();
  };

  return (
    <div id="rendering-div">
      <h3>Rendering in React</h3>
      <button id="rendering-back-button" onClick={backFn}>
        Back
      </button>
    </div>
  );
};

export default RenderingTopic;
