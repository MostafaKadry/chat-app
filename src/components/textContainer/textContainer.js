import React from "react";
import "./textContainer.css";
const TextContainer = ({ users }) => {
  let arr = Array.from(users);
  return (
    <div className="textContainer">
      <h3 className="textContainer-header"> Users in room </h3>
      {arr.map((user, i) => (
        <div key={i} className="textContainer-userName" id={user.id}>
          {user.name}
        </div>
      ))}
    </div>
  );
};

export default TextContainer;
