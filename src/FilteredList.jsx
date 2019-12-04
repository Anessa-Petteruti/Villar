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
      sorting: false, 
      favorites: {
        '': ''
      },
      favOn: false,
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

  displayFavorites = (e) => {
    if (this.state.favOn){
      this.setState({favOn: false});
    } else {
      this.setState({favOn: true});
    }
    
  }

  searching = (e) => {
    this.setState({search: e.target.value});
  }

  changeSortingOn = (e) => {
    this.setState({sorting: true});
  }

   changeIsFavorited = (item) => {
    if (item.isFavorited === false){
      item.isFavorited = true;
      document.getElementById(item.id).src = require('./images/like.png')
    } else {
      item.isFavorited = false;
      document.getElementById(item.id).src = require('./images/heart.png')

    }
    this.addFavorite(item);
    
  }

  addFavorite = (item) => {
    if (item.isFavorited === true){
      this.state.favorites[item.id] = item.address1;
      this.setState({favorites: this.state.favorites})

    } else {
      delete this.state.favorites[item.id];
      this.setState({favorites: this.state.favorites})
    }
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
    if (this.state.favOn) {

      estates = estates.filter(item => item.address1 === this.state.favorites[item.id]);
      console.log(estates);
    }
    // if(this.state.amount) {
    //   estates = this.props.items;
    // }

    return(
      <div className="wholeSite">

      <div className="leftDiv">

      <button className="clearFiltersButton" id="amount" onClick={this.reset} value="All">
      <img className="clearX" src={require('./images/close.png')} alt="Close button"/>Clear filters</button>

      <div className="allFilterOptions">

        <div className="filterAndSortByText">Filter by</div>

          <div className="locationFilters">
          
          <img className="filterIcon" src={require('./images/location.png')} alt="Location Icon"/>
          <div className="filterTitle">Location</div>
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
          <img className="filterIcon" src={require('./images/home.png')} alt="Home Icon"/>
          <div className="filterTitle">Property Type</div>
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
          <img className="filterIcon" src={require('./images/listing.png')} alt="Listing Icon"/>
          <div className="filterTitle">Listing</div>
          <label className="container">Up for Sale
            <input name="listingRadioButton" type="radio" id="listing" onClick={this.changeFilterListing} value="up for sale"/>
            <span className="checkmark"></span>
          </label>

          <label className="container">Rent
            <input name="listingRadioButton" type="radio" id="listing" onClick={this.changeFilterListing} value="rent"/>
            <span className="checkmark"></span>
          </label>
          </div>

          <div className="filterAndSortByText">Sort by</div>
          <div>
          <label className="container">
          <div className="filterTitle">Price</div>
            <input name="priceRadioButton" type="radio" id="price" onClick={this.changeSortingOn}/>
            <span className="checkmark"></span>
          </label>
          </div>

          </div>
          
          <div className="favorites-div">
          <div className="favoritesTitle">My Favorites</div>

          <div className="boxes">
          <input type="checkbox" id="box-1" defaultChecked={this.state.favOn}
              onChange={this.displayFavorites}/>
          <label htmlFor="box-1">Show Favorites</label>

</div>
            <ul className="favorites-list">
              {
                Object.keys(this.state.favorites).map(function(key) {
                  return <li key={key}>{this.state.favorites[key]}</li>
                }.bind(this))
              }
              </ul>
            
            

           </div>

      </div>

        <div className="rightDiv">

          

          

          <div className="logoText">villar</div>

          <div className='input-wrapper'>
            <img className="searchIcon" src={require('./images/searchIcon.png')} alt="Search icon"/>
            <input id="searchbar" onChange={this.searching} value={this.state.search} />
            <span className='input-highlight'></span>
          </div>

          

          <div className="items">

            {estates.map(item => 
              <div className="itemDiv" key={item.id}>
              <img className="previewImage" src={item.photo}/>
              <div className="priceDisplay">{item.priceDisplay}</div>
              <div className="divAddress">
                <img className="divIcon" src={require('./images/locationDivIcon.png')} alt="Location Div Icon"/>
                <div className="addressTextDiv">
                  <div className="address1">{item.address1}</div>
                  <div className="address2">{item.address2}</div>
                </div>
              </div>
              
              <div className="divDesc">
                <img className="divIcon" src={require('./images/descriptionDivIcon.png')} alt="Desc Div Icon"/>
                <div className="description">{item.description}</div>
                <img className="favorite" id={item.id} src={require('./images/heart.png')} onClick = {() => this.changeIsFavorited(item)}/>
              </div>

              <div className="tagsText">Tags</div>

              <div className="allTags">
                <div className="filterType">{item.location}</div>
                <div className="filterType">{item.propertyType}</div>
                <div className="filterType">{item.listing}</div>
              </div>
              </div>
              )}
          </div>
        </div>
      </div>
    );
  }

}

export default FilteredList;
