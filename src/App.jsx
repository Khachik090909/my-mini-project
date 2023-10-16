import React from "react";
import { useState, useEffect } from "react";
import DataContacts from "./components/Data";
import "./App.css";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";

function App() {
  //state (état, données)
  const [dataContacts, setDataContacts] = useState(DataContacts);
  console.log(dataContacts);

  //comportements (dynamique)
  const handleRemoveClick = (id) => {
    const removeContact = dataContacts.filter((contact) => contact.id !== id);
    setDataContacts(removeContact);
    console.log(removeContact);
  };

  //affichage (render)
  return (
    <div>
      <ContactForm />
      <ContactList
        dataContacts={dataContacts}
        handleRemoveClick={handleRemoveClick}
      />
    </div>
  );
}

export default App;
