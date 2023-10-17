import React from "react";
import { useState } from "react";
import "./App.css";
import DataContacts from "./components/Data";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";

function App() {
  //state (état, données)
  const [data, setData] = useState(DataContacts);

  //comportements (dynamique)
  const handleRemoveClick = (id) => {
    const removeContact = data.filter((contact) => contact.id !== id);
    setData(removeContact);
  };

  const addNewContact = (newContact) => {
    const newId = data.length + 1;
    newContact.id = newId;
    setData([...data, newContact]);
  };

  //affichage (render)
  return (
    <>
      <div>
        <ContactForm addNewContact={addNewContact} />
      </div>
      <div>
        <ContactList data={data} handleRemoveClick={handleRemoveClick} />
      </div>
    </>
  );
}

export default App;
