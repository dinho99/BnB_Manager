import React, {Component} from "react";

import Navbar from "./components/navbar";
import Card from "./components/card";

import casale from './images/casale_campagna.png';
import corso from './images/corso.png';
import corviale from './images/corviale.png';
import cottage from './images/cottage.png';
import luxury from './images/luxury.png';
import navona from './images/piazza-navona.png';
import terrazzo from './images/terrazzo.png';
import trastevere from './images/trastevere.png';

class App extends Component {
  state = {
    cards: [
      {id: 0, nome: "Casale in campagna", prezzo: 3500, immagine: casale},
      {id: 1, nome: "Appartamento in Via del Corso", prezzo: 4500, immagine: corso},
      {id: 2, nome: "Appartamento zona Corviale", prezzo: 200, immagine: corviale},
      {id: 3, nome: "Cottage in montagna", prezzo: 3500, immagine: cottage},
      {id: 4, nome: "Villa luxury con piscina", prezzo: 8000, immagine: luxury},
      {id: 5, nome: "Attico su Piazza Navona", prezzo: 5000, immagine: navona},
      {id: 6, nome: "Appartamento al Portuense", prezzo: 1400, immagine: terrazzo},
      {id: 7, nome: "Appartamento zona Trastevere", prezzo: 2200, immagine: trastevere},
    ]
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="container" >
          <h1>What BnB are you looking for?</h1>
          <hr/>
          <div className='row'>
            {this.state.cards.map(card => (
              <Card 
                key={card.id}
                card={card} />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default App;