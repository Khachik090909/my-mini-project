function ContactList({data, setUnfoldedContact, handleRemoveClick}) {
  //state (état, données)

  //comportements (dynamique)
  const handleUnfolded = (id) => {
    setUnfoldedContact(data.filter((contact) => contact.id === id));
    
  }

  
  //affichage (render)
  return (
    <div className="mainContainer">
      <h1>Mes Contacts</h1>
      {data.map((elem) => (
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
