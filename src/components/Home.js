import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="home-div">
      <ul>
        <li>
          <h2 id="home-item">
            <Link to="/">Home</Link>
          </h2>
        </li>
        <li>
          <h2 id="topics-item">
            <Link to="/topics">Topics</Link>
          </h2>
        </li>
      </ul>
      <hr />
    </div>
  );
};
{
  /* <Link to='/home' className="btn btn-primary">Home</Link> */
}

export default Home;
