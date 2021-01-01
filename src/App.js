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
    compteur:0,
    nouveauClient:''
  }

  handleChange = (event) => {
    const value = event.currentTarget.value;
    this.setState({nouveauClient: value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const id = new Date().getTime();
    const nom = this.state.nouveauClient;
    this.addClient(id,nom);
    this.setState({nouveauClient: ''})
    
  }

  addClient = (id,nom) => {
    const clients = this.state.clients.slice();
    clients.push({id: id, nom: nom})

    this.setState({ clients: clients})
  }

  removeClient = (id) => {
    const clients = this.state.clients.slice();
    console.log(id)
    const index = clients.findIndex((client)  => client.id === id 
    )

    clients.splice(index, 1)
    this.setState({clients : clients})

  }



   title="Liste des clients"

  render() {
  return (
   <div>
     <h1>{this.title}</h1>
     <ul>
     {this.state.clients.map(client => (
     <li>
       {client.nom}<button onClick={ () => this.removeClient(client.id)}>X</button>
     </li>
     ))}
     </ul>
     <form  onSubmit={this.handleSubmit}>
       <input value={this.state.nouveauClient} onChange={this.handleChange} type="text" placeholder="Ajouter un client"/>
       <button>Ajouter</button>
     </form>
   </div>
  );
}}

export default App;
