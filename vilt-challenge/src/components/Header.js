import React from "react"; 
import { StyleSheet, css } from "aphrodite";

export default function header(){
return(
    <header className={css(styles.header)}>
        <img
          src="../img/vilt.png"
          alt="Vilt Challenge"
        />
        Vilt Challenge
      </header>
)
}

const styles = StyleSheet.create({
header:{
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1vw',
  margin: '-0.8vw',
  fontSize: '3vw',
  color: 'white',
  background: '#00b7ff'
},
})