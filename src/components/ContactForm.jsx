import { useState } from "react";
import DataContacts from "./Data";

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
        <div className="names-form">
          <label>
            Nom
            <input
              type="text"
              value={lastName}
              onChange={(event) => {
                setLastName(event.target.value);
              }}
              id="input-last-name"
            ></input>
          </label>
          <label>
            Prénom
            <input
              type="text"
              value={firstName}
              onChange={(event) => {
                setFirstName(event.target.value);
              }}
              id="input-first-name"
            ></input>
          </label>
        </div>
        <label>
          Téléphone
          <input
            type="text"
            value={phoneNumber}
            onChange={(event) => {
              setPhoneNumber(event.target.value);
            }}
            id="input-number"
          ></input>
        </label>
        <label>
          Email
          <input
            type="text"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            id="input-mail"
          ></input>
        </label>
        <label>
          URL image
          <input
            type="text"
            value={linkImg}
            onChange={(event) => {
              setLinkImg(event.target.value);
            }}
            id="input-img"
          ></input>
        </label>
      </div>
      <div>
        <button type="submit">Soumettre</button>
      </div>
    </form>
  );
}

export default ContactForm;
