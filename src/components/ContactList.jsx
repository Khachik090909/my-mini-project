function ContactList({ data, handleRemoveClick }) {
  //state (état, données)

  //comportements (dynamique)

  //affichage (render)
  return (
    <div className="mainContainer">
      <h1>Mes Contacts</h1>
      {data.map((elem) => (
        <li className="contactList" key={elem.id}>
          <img src={elem.img} alt={elem.prenom} />
          <p>{elem.nom}</p>
          <p>{elem.prenom}</p>
          <button onClick={() => handleRemoveClick(elem.id)}>X</button>
        </li>
      ))}
    </div>
  );
}

export default ContactList;
