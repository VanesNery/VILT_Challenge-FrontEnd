import React from "react";
import { StyleSheet, css } from "aphrodite";

export default function Card (props){
    return(
        <span className={css(style.card)}>
            <p>Nome: {props.name}</p>
            <p>Cargo: {props.office}</p>
            <p>Data de Admissão: {props.hiring}</p>
            <p>Já fez Coffee: {props.status}</p>
        </span>
    );
}

const style = StyleSheet.create ({
card:{
    width: "29vw",
    margin: "1% 3%",
    float: "left",
    height: "15vw",
    border: "solid",
    borderRadius: "1vw",
    alignItems: "center",
    padding: "1vw"
}
})