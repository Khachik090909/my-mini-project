import React from "react";
import { useState, } from "react";
import DataContacts from "./components/Data";
import "./App.css";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";
import ContactUnfolded from "./components/ContactUnfolded";
function App() {
  //state (état, données)
  const [dataContacts, setDataContacts] = useState(DataContacts);
  const [unfoldedContact, setUnfoldedContact] = useState("");
  //comportements (dynamique)
 
    
  
  
 
  
  return (
    <div>
      <ContactForm />
      <ContactList
        dataContacts={dataContacts}
        setDataContacts={setDataContacts}
        setUnfoldedContact={setUnfoldedContact}
        
      />
      { unfoldedContact && <ContactUnfolded setUnfoldedContact={setUnfoldedContact}
      unfoldedContact={unfoldedContact}/>}
    </div>
  );
}

export default App;
