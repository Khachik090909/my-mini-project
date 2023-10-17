import "./ContactUnfolded.css"

function ContactUnfolded({unfoldedContact, setUnfoldedContact}) {
 

  
  
  
  return (<div className="objectEnlarge">
    
    <h3 onClick={()=>{setUnfoldedContact("")}}>retour</h3>
     
    <img src={unfoldedContact[0].img} alt={unfoldedContact[0].prenom} />
    <p>{unfoldedContact[0].nom}</p>
    <p>{unfoldedContact[0].prenom}</p>
    <p>{unfoldedContact[0].tel}</p>
    <p>{unfoldedContact[0].mail}</p>
  </div>
  );
}





export default ContactUnfolded;
