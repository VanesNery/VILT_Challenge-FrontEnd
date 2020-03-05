import React from "react";
import { StyleSheet, css } from "aphrodite";

export default function Card (props){

    const calculateTime = props => {
        const date = new Date().toLocaleString(props);
        return date;
      };

    return(
        <span className={css(style.card)}>
            <p>Nome: {props.name}</p>
            <p>Cargo: {props.office}</p>
            <p>Data de Admissão: {calculateTime(props.hiring)}</p>
            <p>Já fez Cookies: {props.status}</p>
        </span>
    );
}

const style = StyleSheet.create ({
card:{
    width: '35vw',
    margin: '1% 20%',
    float: 'left',
    height: '13vw',
    border: 'medium solid',
    borderRadius: '1vw',
    alignItems: 'center',
    padding: '0.8vw',
}
})