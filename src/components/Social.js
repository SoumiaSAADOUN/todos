import React from "react";

function Social() {
  return (
    <div>
      {" "}
      <ul className="list-group">
        <li className="list-group-item">
          <input type="checkbox" id="firstChoice"></input>{" "}
          <label htmlFor="firstChoice"> Facebook</label>
        </li>
        <li className="list-group-item">
          <input type="checkbox" id="secondChoice"></input>{" "}
          <label htmlFor="firstChoice"> Instagrame</label>{" "}
        </li>
        <li className="list-group-item">
          <input type="checkbox" id="thirdChoice"></input>{" "}
          <label htmlFor="firstChoice"> Twitetr</label>{" "}
        </li>
      </ul>
      <br />{" "}
      <button className="btn btn-primary" id="theSubmit">
        Submit
      </button>
    </div>
  );
}

export default Social;
