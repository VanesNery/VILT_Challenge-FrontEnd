import React from "react";
import { StyleSheet, css } from "aphrodite";

export default function Input (props){
    return(
        <input className={css(style.input)} placeholder={props.placeholder} 
        value={props.value} 
        onChange={props.onChange} 
        title={props.title} type={props.type} name={props.name} />
    )
}

const style = StyleSheet.create({
    input:{
        display: "grid",
        fontSize: "15px",
        listStyle: "none",
        margin: "0vw 0vw 1vw"
    }
})