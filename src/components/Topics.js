import React from "react";
import { Link, useHistory } from "react-router-dom";

const Topics = () => {
  let history = useHistory();
  const backFn = () => {
    history.goBack();
  };

  return (
    <div id="topics-div">
      <h2>Topics</h2>
      <ul>
        <li>
          <h2 id="rendering">
            <Link to="/topics/rendering">Rendering</Link>
          </h2>
        </li>
        <li>
          <h2 id="components">
            <Link to="/topics/components">Components</Link>
          </h2>
        </li>
      </ul>
      <hr />
      <button id="topics-back-button" onClick={backFn}>
        Back
      </button>
      {/* <Redirect to="/">Back</Redirect> */}
    </div>
  );
};

export default Topics;
