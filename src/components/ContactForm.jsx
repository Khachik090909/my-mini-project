import { useState } from "react";
import DataContacts from "./Data";

function ContactForm({ addNewContact }) {
  // state (état, données)
  const [contact, setContact] = useState({
    nom: "",
    prenom: "",
    tel: "",
    mail: "",
    img: "",
  });

  // comportements (dynamique)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewContact(contact);

    setContact({
      nom: "",
      prenom: "",
      tel: "",
      mail: "",
      img: "",
    });
  };

  // affichage (render)
  return (
    <div className="mainForm">
      <form className="formContact" onSubmit={handleSubmit}>
        <h2>Ajouter un Contact</h2>
        <input
          type="text"
          name="nom"
          placeholder="Nom"
          value={contact.nom}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="prenom"
          placeholder="Prénom"
          value={contact.prenom}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="tel"
          placeholder="Téléphone"
          value={contact.tel}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="mail"
          placeholder="E-mail"
          value={contact.mail}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="img"
          placeholder="URL de l'image"
          value={contact.img}
          onChange={handleInputChange}
        />
        <button type="submit">Soumettre</button>
      </form>
    </div>
  );
}

export default ContactForm;
