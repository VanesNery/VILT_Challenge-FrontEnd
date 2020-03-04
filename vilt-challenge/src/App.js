import React, { useEffect, useState } from 'react';
import firebase from './utils/firebaseUtils';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';

export default function App() {
const [list, setList] = useState([]);

useEffect(()=> {
  firebase
  .firestore()
  .collection('contributors')
  .get()
  .then((querySnapshot) => {
    const people = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }))
    setList(people);
  });
},[]);

  return (
    <main>
      <Header/>
      <h3>Lista de Colaboradores</h3>
      {list.map(list => (
          <Card
            {...list}
          />
        ))}
      <Footer txt='Criador por Vanessa Nery'/>
    </main>
  );
}