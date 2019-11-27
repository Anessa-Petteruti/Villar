import React, { Component } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import List from "./List";
import "./FilteredList.css";

class FilteredList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      location: "",
      listing: "",
      propertyType: "",
      amount: "",
      sorting: false
    };

    this.baseState = this.state



  }

  
  changeFilterLocation = (e) => {
    this.setState({location: e.target.value});
  }
  changeFilterListing = (e) => {
    this.setState({listing: e.target.value});
  }
  changeFilterPropertyType = (e) => {
    this.setState({propertyType: e.target.value});
  }


  changeFilterAmount = (e) => {
    this.setState({amount: e.target.value});
  }

  searching = (e) => {
    this.setState({search: e.target.value});
  }

  changeSortingOn = (e) => {
    this.setState({sorting: true});
  }




  reset = () => {
    this.setState(this.baseState)
  }



  render() {
    let estates = this.props.items;

    if(this.state.search) {
      estates = estates.filter(item => item.address1.toLowerCase().includes(this.state.search.toLowerCase()));
    }
    if(this.state.location) {
      estates = estates.filter(item => item.location.toLowerCase() === this.state.location.toLowerCase());
    }
    if(this.state.listing) {
      estates = estates.filter(item => item.listing.toLowerCase() === this.state.listing.toLowerCase());
    }
    if(this.state.propertyType) {
      estates = estates.filter(item => item.propertyType.toLowerCase() === this.state.propertyType.toLowerCase());
    }
    if(this.state.propertyType) {
      estates = estates.filter(item => item.propertyType.toLowerCase() === this.state.propertyType.toLowerCase());
    }
    if(this.state.sorting) {
      estates.sort((a, b) => (a.price - b.price))
    }
    // if(this.state.amount) {
    //   estates = this.props.items;
    // }

    return(
      <div>

        <button onClick={this.changeSortingOn}>SORT BY PRICE</button>

        <button id="amount" onClick={this.changeFilterAmount} value="All">Reset</button>

        <div className="logoText">villar</div>

        <input id="searchbar" onChange={this.searching} value={this.state.search} />

        <div className="allFilterOptions">

        <div className="locationFilters">
        <label className="container">Urban
          <input name="locationRadioButton" type="radio" id="location" onClick={this.changeFilterLocation} value="urban"/>
          <span className="checkmark"></span>
        </label>

        <label className="container">Suburban
          <input name="locationRadioButton" type="radio" id="location" onClick={this.changeFilterLocation} value="suburban"/>
          <span className="checkmark"></span>
        </label>

        <label className="container">Rural
          <input name="locationRadioButton" type="radio" id="location" onClick={this.changeFilterLocation} value="rural"/>
          <span className="checkmark"></span>
        </label>
        </div>

        <div className="propertyTypeFilters">
        <label className="container">Apartment
          <input name="propertyTypeRadioButton" type="radio" id="propertyType" onClick={this.changeFilterPropertyType} value="apartment"/>
          <span className="checkmark"></span>
        </label>

        <label className="container">House
          <input name="propertyTypeRadioButton" type="radio" id="propertyType" onClick={this.changeFilterPropertyType} value="house"/>
          <span className="checkmark"></span>
        </label>

        <label className="container">Townhouse
          <input name="propertyTypeRadioButton" type="radio" id="propertyType" onClick={this.changeFilterPropertyType} value="townhouse"/>
          <span className="checkmark"></span>
        </label>

        <label className="container">Studio
          <input name="propertyTypeRadioButton" type="radio" id="propertyType" onClick={this.changeFilterPropertyType} value="studio"/>
          <span className="checkmark"></span>
        </label>
        </div>
        

        <div className="listingFilters">
        <label className="container">Up for Sale
          <input name="listingRadioButton" type="radio" id="listing" onClick={this.changeFilterListing} value="up for sale"/>
          <span className="checkmark"></span>
        </label>

        <label className="container">Rent
          <input name="listingRadioButton" type="radio" id="listing" onClick={this.changeFilterListing} value="rent"/>
          <span className="checkmark"></span>
        </label>
        </div>

        </div>

        <div className="items">

          {estates.map(item => 
            <div className="itemDiv"key={item.id}>
            <img className="previewImage" src={item.photo}/>
            <div className="address1">{item.address1}</div>
            <div className="address2">{item.address2}</div>
            <div className="priceDisplay">{item.priceDisplay}</div>
            <div className="description">{item.description}</div>
            <div className="filterType">{item.location}</div>
            <div className="filterType">{item.propertyType}</div>
            <div className="filterType">{item.listing}</div>
            </div>
            )}
        </div>
      </div>
    );
  }

}

export default FilteredList;
