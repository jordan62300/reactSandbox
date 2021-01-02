import logo from './logo.svg';
import './App.css';
import React , {useState} from 'react';
import ReactDOM from 'react-dom';
import Client from './Client'
import ClientForm from './ClientForm'
import Counter from './Counter'




const App = () => {


  const [clients, setClients] = useState([
      
    {  id: 1, nom:"Jordan"},
    {  id: 2, nom:"Justine"},
    {  id: 3, nom:"Jack"}
    
  ])


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
   </div>
  );
}

export default App;
