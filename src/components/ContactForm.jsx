import { useState } from "react";
import DataContacts from "./Data";
import "./ContactForm.css";

function ContactForm({ data, setData }) {
  const SubmitFormClick = () => {
    setData([
      ...data,
      {
        id: data[data.length - 1].id + 1,
        nom: lastName,
        prenom: firstName,
        tel: phoneNumber,
        mail: email,
        img: linkImg,
      },
    ]);
  };
  console.log(DataContacts);

  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [linkImg, setLinkImg] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        SubmitFormClick();
        setLastName("");
        setFirstName("");
        setPhoneNumber("");
        setEmail("");
        setLinkImg("");
      }}
    >
      <div className="contact-form">
        <div id="names-form" className="form-label">
          <label>Nom</label>
          <input
            type="text"
            placeholder="Doe"
            value={lastName}
            onChange={(event) => {
              setLastName(event.target.value);
            }}
            id="input-last-name"
          ></input>
        </div>
        <div id="firstname-form" className="form-label">
          <label>Prénom</label>
          <input
            type="text"
            placeholder="John"
            value={firstName}
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
            id="input-first-name"
          ></input>
        </div>
        <div id="phone" className="form-label">
          <label>Téléphone</label>
          <input
            type="text"
            placeholder="06 ?? ?? ?? ??"
            value={phoneNumber}
            onChange={(event) => {
              setPhoneNumber(event.target.value);
            }}
            id="input-number"
          ></input>
        </div>
        <div id="mail" className="form-label">
          <label>Email</label>
          <input
            type="text"
            placeholder="exemple@mail.com"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            id="input-mail"
          ></input>
        </div>
        <div id="image-url" className="form-label">
          <label>URL image</label>
          <input
            type="text"
            placeholder="Put the link of you're image here"
            value={linkImg}
            onChange={(event) => {
              setLinkImg(event.target.value);
            }}
            id="input-img"
          ></input>
        </div>
      </div>
      <div>
        <button id="submit-button" type="submit">
          Soumettre
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
