import React, {useState} from "react";


const ClientForm  = (props) => {


    const [nouveauClient , setNouveauClient] = useState('');

    const handleChange = event => {
        setNouveauClient(event.currentTarget.value)
      }

    const handleSubmit = (event) => {
        event.preventDefault()
        const id = new Date().getTime();
        const nom = nouveauClient;
        props.onClientAdd({id,nom})
       // console.log(this.state.nouveauClient)
      }

    
        return(
            <form  onSubmit={handleSubmit}>
            <input value={nouveauClient} onChange={handleChange} type="text" placeholder="Ajouter un client"/>
            <button>Ajouter</button>
          </form>
        )
    
}

export default ClientForm