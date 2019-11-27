import React, { Component } from "react";
import "./App.css";
import HelloWorld from "./HelloWorld";
import Counter from "./Counter";
import FilteredList from "./FilteredList";
import List from "./List";

const estates = [

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
    amount: "All"
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
    amount: "All"
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
    amount: "All"
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
    amount: "All"
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
    amount: "All"
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
    amount: "All"
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
