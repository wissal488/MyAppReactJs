import React from'react';
import './Carte.css';
class Carte extends React.Component{
    render(){
        let url="https://robohash.org/"+this.props.nbr;
        return(
            <div className="App">
                <img src={url} > </img>
        <p>{this.props.nom}</p>
        <p>{this.props.filiere}</p>
            </div>
        );
    }
}