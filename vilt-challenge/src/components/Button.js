import React from "react";
import { StyleSheet, css } from "aphrodite";

export default function Button(props) {
  return (
    <button
      className={css(style.button)}
      onClick={props.handleClick}
    >
      <p>{props.title}</p>
    </button>
  );
}

const style = StyleSheet.create({
  button:{
    fontSize: "1vw",
    fontWeight: "bold",
    borderRadius: "1vw",
    cursor: "pointer",
    height: "25%"
  }
})