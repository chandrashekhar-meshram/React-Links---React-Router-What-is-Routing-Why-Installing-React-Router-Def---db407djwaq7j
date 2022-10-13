import React from "react";
// import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const RenderingTopic = () => {
  // let history = useHistory();

  // const backFn = () => {
  //   history.goBack();
  // };

  return (
    <div id="rendering-div">
      <h3>Rendering in React</h3>
      {/* <button id="rendering-back-button" onClick={backFn}>
        Back
      </button> */}
      <button id="rendering-back-button">
        <Link to="/topics">Back</Link>
      </button>
    </div>
  );
};

export default RenderingTopic;
