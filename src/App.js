import logo from './logo.svg';
import './App.css';





function App() {


 let state = {
    clients: [
      
      {  id: 1, nom:"Jordan"},
      {  id: 2, nom:"Justine"},
      {  id: 3, nom:"Jack"}
      
    ]
  }

  const title="Liste des clients"
  const element = <li>Teste variable</li>
  return (
   <div>
     <h1>{title}</h1>
     <ul>
     {state.clients.map(client => (
     <li>
       {client.nom}<button>X</button>
     </li>
     ))}
     </ul>
     <form>
       <input type="text" placeholder="Ajouter un client"/>
       <button>Ajouter</button>
     </form>
   </div>
  );
}

export default App;
