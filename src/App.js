import logo from './logo.svg';
import './App.css';
import React , {useState} from 'react';
import ReactDOM from 'react-dom';
import Client from './Client'
import ClientForm from './ClientForm'
import Counter from './Counter'
import "./styles.css";

// Composant en fin de chaine
// Il reçoit dans ses props le thème et la fonction qui permet de le changer
function ThemeChoice(props) {
  const handleChange = event => {
    const value = event.currentTarget.value;
    props.updateTheme(value);
  };

  return (
    <select name="theme" defaultValue={props.theme} onChange={handleChange}>
      <option value="dark">Sombre</option>
      <option value="light">Clair</option>
    </select>
  );
}

// Composant en deuxième ligne
// Il reçoit dans ses props le thème et la fonction qui permet de le changer
// Notons qu'en vrai il en a rien à foutre il s'en sert pas lui même
// C'est uniquement pour pouvoir le passer au composant ThemeChoice ...
function ToolBar(props) {
  return (
    <div>
      <button>Zoomer</button>
      <button>Dezoomer</button>
      <ThemeChoice theme={props.theme} updateTheme={props.updateTheme} />
    </div>
  );
}


const App = () => {


  const [clients, setClients] = useState([
      
    {  id: 1, nom:"Jordan"},
    {  id: 2, nom:"Justine"},
    {  id: 3, nom:"Jack"}
    
  ])
  const [theme, setTheme] = useState("light");

 const addClient = (client) => {
    const updtatedClients = [...clients]
    updtatedClients.push(client)
    setClients(updtatedClients)
  }

 const removeClient = (id) => { 
    const updtatedClients = [...clients];
    const index = updtatedClients.findIndex((client)  => client.id === id )
    updtatedClients.splice(index, 1)
    setClients(updtatedClients)
  }



  const title="Liste des clients"

  return (
   <div>
     <h1>{title}</h1>
     <Counter />
     <ul>
     {clients.map(client => (
    <Client details={client} onDelete={removeClient}/>
     ))}
     </ul>
     <ClientForm onClientAdd={addClient}/>
     <div className={theme}>
      <ToolBar theme={theme} updateTheme={setTheme} />
      <p>Theme utilisé : {theme}</p>
    </div>
   </div>
   
  );
}

export default App;
