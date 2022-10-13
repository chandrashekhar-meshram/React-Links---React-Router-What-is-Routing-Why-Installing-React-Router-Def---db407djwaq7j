import React from "react";
// import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const ComponentsTopic = () => {
  //let history = useHistory();

//   const backFn = () => {
//     history.goBack();
//   };  

  return (
    <div id="components-div">
      <h3>Components in React</h3>
       {/* <button id="components-back-button" onClick={backFn}>
         Back
       </button> */}
    <button id="components-back-button">
      <Link to="/topics">Back</Link>
    </button>
    </div>
  );
};

export default ComponentsTopic;
