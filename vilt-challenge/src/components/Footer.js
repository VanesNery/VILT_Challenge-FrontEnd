import React from "react";
import { StyleSheet, css } from "aphrodite";

export default function Footer(props){
    return(
        <footer className={css(style.footer)}>
            {props.txt}
        </footer>
    )
}

const style = StyleSheet.create({
footer: {
  display: 'flex',
  justifyContent: 'center',
  padding: '1vw',
  margin: '-0.8vw',
  fontSize: '1vw',
  color: 'white',
  background: '#00b7ff'
    }
})