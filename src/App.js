import React, { Component } from "react";
import "./App.css";
import HelloWorld from "./HelloWorld";
import Counter from "./Counter";
import FilteredList from "./FilteredList";
import List from "./List";

var estates = [

  {
    id: 1,
    photo: require('./images/40OldFarmRoad.jpg'),
    price: 2500000,
    priceDisplay: "$2,500,000",
    address1: "40 Old Farm Road",
    address2: "East Greenwich, RI, 02818",
    description: "A sprawling estate suitable for a family of five.",
    location: "suburban",
    propertyType: "house",
    listing: "up for sale",
    style: "french",
    dateListed: "July 14, 2019",
    amount: "All",
    isFavorited: false
  },
  {
    id: 2,
    photo: require('./images/90PleasantDrive.jpg'),
    price: 910000,
    priceDisplay: "$910,000",
    address1: "90 Pleasant Drive",
    address2: "East Greenwich, RI, 02818",
    description: "Upgraded colonial-style family home.",
    location: "suburban",
    propertyType: "house",
    listing: "up for sale",
    style: "colonial",
    dateListed: "May 6, 2019",
    amount: "All",
    isFavorited: false
  },
  {
    id: 3,
    photo: require('./images/75RiverviewRoad.jpg'),
    price: 1300000,
    priceDisplay: "$1,300,000",
    address1: "75 Riverview Road",
    address2: "East Greenwich, RI, 02818",
    description: "High-ceiled home on a 4-acre lot.",
    location: "rural",
    propertyType: "house",
    listing: "up for sale",
    style: "french",
    dateListed: "April 1, 2019",
    amount: "All",
    isFavorited: false
  },
  {
    id: 4,
    photo: require('./images/45MissFryDrive.jpg'),
    price: 1100000,
    priceDisplay: "$1,100,000",
    address1: "45 Miss Fry Drive",
    address2: "East Greenwich, RI, 02818",
    description: "Colonial meets rustic in this five bedroom home.",
    location: "suburban",
    propertyType: "house",
    listing: "up for sale",
    style: "colonial",
    dateListed: "January 6, 2019",
    amount: "All",
    isFavorited: false
  },
  {
    id: 5,
    photo: require('./images/22WampanoagRoad.jpeg'),
    price: 450000,
    priceDisplay: "$450,000",
    address1: "22 Wampanoag Road",
    address2: "East Greenwich, RI, 02818",
    description: "Colonial home in the style of a barn.",
    location: "suburban",
    propertyType: "house",
    listing: "up for sale",
    style: "colonial",
    dateListed: "January 1, 2019",
    amount: "All", 
    isFavorited: false
  },
  {
    id: 6,
    photo: require('./images/1200RugglesAvenue.jpg'),
    price: 2000,
    priceDisplay: "$2,000/month",
    address1: "1200 Ruggles Avenue",
    address2: "Providence, RI, 02906",
    description: "Colonial home in the style of a barn.",
    location: "urban",
    propertyType: "apartment",
    listing: "rent",
    style: "modern",
    dateListed: "July 7, 2019",
    amount: "All", 
    isFavorited: false
  },
  {
    id: 7,
    photo: require('./images/30OriginWay.jpg'),
    price: 3500,
    priceDisplay: "$3,500/month",
    address1: "30 Origin Way",
    address2: "Warwick, RI, 02887",
    description: "Classic colonial townhouse for a small family.",
    location: "suburban",
    propertyType: "townhouse",
    listing: "rent",
    style: "colonial",
    dateListed: "February 8, 2019",
    amount: "All", 
    isFavorited: false
  },
  {
    id: 8,
    photo: require('./images/46SecretLane.jpeg'),
    price: 900000,
    priceDisplay: "$900,000",
    address1: "46 Secret Lane",
    address2: "East Greenwich, RI, 02818",
    description: "French-influenced brick house on a 4-acre lot",
    location: "suburban",
    propertyType: "house",
    listing: "up for sale",
    style: "french",
    dateListed: "July 8, 2019",
    amount: "All",
    isFavorited: false
  },
  {
    id: 9,
    photo: require('./images/300OceanRoad.jpg'),
    price: 6500000,
    priceDisplay: "$6,500,000",
    address1: "300 Ocean Road",
    address2: "Newport, RI, 02840",
    description: "Sprawling mansion right on an ocean cliff",
    location: "suburban",
    propertyType: "house",
    listing: "up for sale",
    style: "french",
    dateListed: "June 21, 2019",
    amount: "All",
    isFavorited: false
  },
  {
    id: 10,
    photo: require('./images/62AppianApartments.jpg'),
    price: 2500,
    priceDisplay: "$2,500/month",
    address1: "62 Appian Apartments",
    address2: "Providence, RI, 02906",
    description: "Spacious apartment in the heart of Providence",
    location: "urban",
    propertyType: "apartment",
    listing: "rent",
    style: "modern",
    dateListed: "May 16, 2019",
    amount: "All",
    isFavorited: false

  },
  {
    id: 11,
    photo: require('./images/112PawnDrive.jpg'),
    price: 2000000,
    priceDisplay: "$2,000,000",
    address1: "112 Pawn Drive",
    address2: "Warwick, RI, 02887",
    description: "Mansion with a pool and view",
    location: "suburban",
    propertyType: "house",
    listing: "up for sale",
    style: "colonial",
    dateListed: "January 2, 2019",
    amount: "All",
    isFavorited: false
  },
  {
    id: 12,
    photo: require('./images/34ViewportRoad.jpeg'),
    price: 425000,
    priceDisplay: "$425,000",
    address1: "34 Viewport Road",
    address2: "East Greenwich, RI, 02818",
    description: "Barn-inpspired house with a beautiful lot",
    location: "suburban",
    propertyType: "house",
    listing: "up for sale",
    style: "colonial",
    dateListed: "January 9, 2019",
    amount: "All",
    isFavorited: false
  },
  {
    id: 13,
    photo: require('./images/75GeraldAvenue.jpg'),
    price: 3800,
    priceDisplay: "$3,800/month",
    address1: "75 Gerald Avenue",
    address2: "Providence, RI, 02906",
    description: "Charming townhouse on Gerald Avenue",
    location: "urban",
    propertyType: "townhouse",
    listing: "rent",
    style: "colonial",
    dateListed: "March 2, 2019",
    amount: "All",
    isFavorited: false
  },
  {
    id: 14,
    photo: require('./images/66MysteryLane.jpg'),
    price: 700000,
    priceDisplay: "$700,000",
    address1: "66 Mystery Lane",
    address2: "East Greenwich, RI, 02818",
    description: "Dark colonial-style house",
    location: "suburban",
    propertyType: "house",
    listing: "up for sale",
    style: "colonial",
    dateListed: "April 5, 2019",
    amount: "All",
    isFavorited: false
  },
  {
    id: 15,
    photo: require('./images/50PortAvenue.jpg'),
    price: 2700,
    priceDisplay: "$2,700/month",
    address1: "50 Port Avenue",
    address2: "Warwick, RI, 02887",
    description: "Townhouse with a colorful front",
    location: "suburban",
    propertyType: "townhouse",
    listing: "rent",
    style: "colonial",
    dateListed: "April 9, 2019",
    amount: "All",
    isFavorited: false
  },
];

class App extends Component {
  render() {
    return (
      <div className="App">

    
        <FilteredList items={estates} />
        

        
      </div>
    );
  }
}

export default App;
