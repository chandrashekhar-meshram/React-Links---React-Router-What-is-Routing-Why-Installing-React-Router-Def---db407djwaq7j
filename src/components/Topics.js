import React from "react";
import { Redirect } from "react-router-dom";

const Topics = () => {
  return (
    <div id="topics-div">
      <h2>Topics</h2>
      <ul>
        <li>
          <h2 id="rendering">
            <Link to="/topics/components">Rendering</Link>
          </h2>
        </li>
        <li>
          <h2 id="components">Components</h2>
        </li>
      </ul>
      <hr />
      <button id="topics-back-button">Back</button>
      {/* <Redirect to="/">Back</Redirect> */}
    </div>
  );
};

export default Topics;
