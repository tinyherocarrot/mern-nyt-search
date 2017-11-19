import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const DeleteBtn = props => (
  <span
    className="delete-btn"
    {...props}
    style={{ float: "right", color: "red" }}
  >
    ✗
  </span>
);

export default DeleteBtn;
