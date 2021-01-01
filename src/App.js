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
  return (
   <div>
     <h1>{title}</h1>
     <ul>
       <li>Jordan <button>X</button></li>
       <li>Justine<button>X</button></li>
       <li>Jack<button>X</button></li>
     </ul>
     <form>
       <input type="text" placeholder="Ajouter un client"/>
       <button>Ajouter</button>
     </form>
   </div>
  );
}

export default App;
