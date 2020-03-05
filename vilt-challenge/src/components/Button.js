import React from "react";

export default function Button(props) {
  return (
    <button
      className={props.className}
      onClick={props.handleClick}
    >
      <p>{props.title}</p>
    </button>
  );
}