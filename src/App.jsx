import React from "react";
import { useState } from "react";
import "./App.css";
import DataContacts from "./components/Data";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";
import ContactUnfolded from "./components/ContactUnfolded";
function App() {
  //state (état, données)
  const [data, setData] = useState(DataContacts);
  const [unfoldedContact, setUnfoldedContact] = useState("");
  //comportements (dynamique)
  const handleRemoveClick = (id) => {
    const removeContact = data.filter((contact) => contact.id !== id);
    setData(removeContact);
  };

  //affichage (render)
  return (
    <div>
      <ContactForm data={data} setData={setData} />
      <ContactList handleRemoveClick={handleRemoveClick} dataContacts={DataContacts} setUnfoldedContact={setUnfoldedContact}/>
      {unfoldedContact && <ContactUnfolded unfoldedContact={unfoldedContact} setUnfoldedContact={setUnfoldedContact} />}
    </div>
  );
}

export default App;
