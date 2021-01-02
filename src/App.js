import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Client from './Client'
import ClientForm from './ClientForm'
import Counter from './Counter'




class App extends React.Component {

  

  state = {
    clients: [
      
      {  id: 1, nom:"Jordan"},
      {  id: 2, nom:"Justine"},
      {  id: 3, nom:"Jack"}
      
    ]
  }

  addClient = client => {
    const clients = [...this.state.clients]
    clients.push(client)
    this.setState({clients})
  }

  removeClient = id => { 
    const clients = [...this.state.clients];
    const index = clients.findIndex((client)  => client.id === id 
    )
    clients.splice(index, 1)
    this.setState({clients})
  }



   title="Liste des clients"

  render() {
  return (
   <div>
     <h1>{this.title}</h1>
     <Counter />
     <ul>
     {this.state.clients.map(client => (
    <Client details={client} onDelete={this.removeClient}/>
     ))}
     </ul>
     <ClientForm onClientAdd={this.addClient}/>
   </div>
  );
}}

export default App;
