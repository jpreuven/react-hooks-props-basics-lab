import React from "react";
import user from "../data/user";

function Links(props) {
  //   props = user;

  return (
    <div>
      <h3>Links</h3>
      {/* <a>{props.links}</a> */}
      <a href={props.github}>{props.github}</a>
      <a href={props.linkedin}>{props.linkedin}</a>
    </div>
  );
}

export default Links;

// an <h3> element with the text of "Links"
// an <a> element with its href and text content set to URL of the user's Github link, passed down as a prop
// a second <a> element with its href and text content set to URL of the user's LinkedIn link, passed down as a prop
