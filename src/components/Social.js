import React from "react";
import SocaileItem from "./SocialItem";
function Social() {
  return (
    <div>
      {" "}
      <ul className="list-group">
        <SocaileItem media="facebook" img="https://picsum.photos/50"/>
        <SocaileItem media="instagram" img="https://picsum.photos/51"/>
        <SocaileItem media="twitter" img="https://picsum.photos/52"/>
       
      </ul>
      <br />{" "}
      <button className="btn btn-primary" id="theSubmit">
        Submit
      </button>
    </div>
  );
}

export default Social;
