import React from "react";
import { StyleSheet, css } from "aphrodite";
import Button from "./Button";

export default function Card (props){

        return(
        <span className={css(style.card)}>
            <p>Nome: {props.name}</p>
            <p>Cargo: {props.office}</p>
            <p>Data de Admissão: {props.hiring}</p>
            <p>Já fez Cookies: {props.status}</p>
            <Button handleClick={props.onClick} title={props.title}/>
        </span>
    );
}

const style = StyleSheet.create ({
card:{
    width: '35vw',
    margin: '1% 20%',
    float: 'left',
    border: 'medium solid',
    borderRadius: '1vw',
    alignItems: 'center',
    padding: '0.8vw',
}
})