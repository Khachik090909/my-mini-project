function ContactList({ dataContacts,  setUnfoldedContact, handleRemoveClick}) {
  //state (état, données)

  //comportements (dynamique)
  const handleUnfolded = (id) => {
    setUnfoldedContact(dataContacts.filter((contact) => contact.id === id));
    
  }

  
  //affichage (render)
  return (
    <div className="mainContainer">
      <h1>Liste de Contatcs</h1>
      {dataContacts.map((elem) => (
        <li className="contactList" key={elem.id}>
          <img onClick={() => handleUnfolded(elem.id)} src={elem.img} alt={elem.prenom} />
          <p>{elem.nom}</p>
          <p>{elem.prenom}</p>
          <button onClick={() => handleRemoveClick(elem.id)}>X</button>
        </li>
      ))}
    </div>
  );
}

export default ContactList;
