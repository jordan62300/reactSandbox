import React, {Component} from "react";

class Client extends Component  {
    

    render() {

        const { onDelete , details} = this.props

        return (
        <li>
        {details.nom} {details.id}<button onClick={ () => onDelete(this.props.details.id)}>X</button>
        </li>
        )
    }
}

export default Client