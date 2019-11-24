import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  render(){
    let noms=[
      {
        nom:"said",
        nbr: 123,
        filiere: "ISIL"
      },
      {
        nom:"wissal",
        nbr:524,
        filiere: "ISIL"
      }
    ];
    let elems= noms.map((val,idx)=>{
      return<Carte key={idx} nom={val.nom} nbr={val.nbr} filiere={val.filiere}></Carte>
     });
    return(
      <div>
        <div>SearchBar</div>
        {elems}
      </div>
    );
  }
}

export default App;

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/


