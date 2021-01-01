import logo, { ReactComponent } from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';




class App extends React.Component {


  state = {
    clients: [
      
      {  id: 1, nom:"Jordan"},
      {  id: 2, nom:"Justine"},
      {  id: 3, nom:"Jack"}
      
    ],
    compteur:0
  }

  addClient = () => {
    const clients = this.state.clients.slice();
    clients.push({id: 4, nom: "Jojo"})

    this.setState({ clients: clients})
  }

  removeClient = (id) => {
    const clients = this.state.clients.slice();
    console.log(id)
  }



   title="Liste des clients"

  render() {
  return (
   <div>
     <h1>{this.title}</h1>
     {this.state.compteur}
     <button onClick={this.addClient}>Clik me</button>
     <ul>
     {this.state.clients.map(client => (
     <li>
       {client.nom}<button onClick={ () => this.removeClient(client.id)}>X</button>
     </li>
     ))}
     </ul>
     <form>
       <input type="text" placeholder="Ajouter un client"/>
       <button>Ajouter</button>
     </form>
   </div>
  );
}}

export default App;
