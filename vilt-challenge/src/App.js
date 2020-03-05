import React, { useEffect, useState } from "react";
import { StyleSheet, css } from "aphrodite";
import growl from "growl-alert";
import "growl-alert/dist/growl-alert.css";
import firebase from "./utils/firebaseUtils";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Input from "./components/Input";
import Button from "./components/Button";

export default function App() {
  const [list, setList] = useState([]);
  const [name, setName] = useState("");
  const [office, setOffice] = useState("");

  const refresh = {
    fadeAway: true,
    fadeAwayTimeout: 2000
  };

  useEffect(() => {
    firebase
      .firestore()
      .collection("contributors")
      .orderBy("hiring", "desc")
      .get()
      .then(querySnapshot => {
        const people = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setList(people);
      });
  }, []);

  const updateStatus = list => {
    if (list.status === "Ausente") {
      firebase
        .firestore()
        .collection("contributors")
        .doc(list.id)
        .update({ status: "Pendente" })
        .then(() => {
          growl.success({ text: "Seu Status foi alterado", ...refresh });
        });
    } else if (list.status === "Concluído") {
      firebase
        .firestore()
        .collection("contributors")
        .doc(list.id)
        .update({ status: "Pendente" })
        .then(() => {
          growl.success({ text: "Seu Status foi alterado", ...refresh });
        });
    }
  };

  const addContributor = () => {
    if ((name && office) === 0) {
      growl.warning({
        text: "Por Favor, preencha todos os dados!",
        ...refresh
      });
    } else {
      const person = {
        name,
        office,
        hiring:
          new Date().getDay() +
          "/" +
          new Date().getMonth() +
          "/" +
          new Date().getFullYear(),
        status: "Pendente"
      };
      firebase
        .firestore()
        .collection("contributors")
        .add(person);
      setName("");
      setOffice("");
      growl.success({ text: "ColaboradoX cadastrado com sucesso", ...refresh });
    }
  };

  return (
    <main className={css(style.main)}>
      <Header />
      <aside className={css(style.asideContributors)}>
        <fieldset className={css(style.input)}>
          <legend>Cadastro dos Colaboradores</legend>
          <label>Nome do Colaborador: </label>
          <Input
            value={name}
            title="Nome do Colaborador"
            type="text"
            onChange={e => setName(e.target.value)}
          />
          <label>Cargo: </label>
          <Input
            value={office}
            title="Cargo"
            type="text"
            onChange={e => setOffice(e.target.value)}
          />
          <Button handleClick={() => addContributor()} title="Cadastrar" />
        </fieldset>
      </aside>
      <aside className={css(style.asideInsert)}>
        <h3 className={css(style.h3)}>Lista de Colaboradores</h3>
        {list.map(list => (
          <Card
            key={list.id}
            name={list.name}
            office={list.office}
            hiring={list.hiring}
            status={list.status}
            onClick={()=>updateStatus(list)}
            title={list.status === "Ausente"
            ? "Quero fazer os Cookies"
            : "Preciso Adiar"}
          />
        ))}
      </aside>
      <Footer txt="Criador por Vanessa Nery" />
    </main>
  );
}

const style = StyleSheet.create({
  h3: {
    display: "flex",
    justifyContent: "center"
  },
  input: {
    width: "15vw",
    margin: "1% 20%",
    float: "left",
    border: "medium solid",
    borderRadius: "1vw",
    alignItems: "center",
    padding: "1vw"
  },
  asideInsert: {
    width: "40%",
    float: "left",
    alignItems: "center",
    margin: "1% -8%"
  },
  asideContributors: {
    margin: "4% -3% 7% 1.8% ",
    width: "45%",
    float: "left",
    alignItems: "center",
    padding: "1vw"
  },
  main: {
    width: "99.6%"
  }
}); 
