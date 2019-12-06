Welcome to Villar, the villa search site!

Browse select homes in Rhode Island based on their location, property type, and listing. Sort by price!

To run Villar:
1. Make sure node is installed
2. cd into my-test
3. Run npm install to install node modules
4. We added Axios, OpenWeather, Bootstrap, and React Native node modules so these might have to be installed manually in addition to running npm install by running:
	npm install openweather-apis
	npm install axios
	npm install react-native
	npm install react-bootstrap
(All dependencies that we installed are listed in the package.json)
5. Once all node modules are installed, run npm start from the my-test directory
6. Watch Villar appear on your screen! (The weather widget on the right side bar will take a couple seconds to load local weather data - you will have to allow Villar to use your current location if you would like to see the weather appear in the right side bar.)


Our filtering categories include:
- Location (Urban, Suburban, or Rural)
- Property Type (Apartment, House, Townhouse, or Studio)
- Listing (Up for Sale or Rent)

Our method of sorting is:
- Price

(You can clear all filters by clicking the "Clear filters" button on the top of the left side bar.)

Since we worked in a group of two, we added the favorites functionality in which the user can Favorite different villas by clicking the heart icon in the item divs and add to their Favorites list. They can remove a villa from their Favorites list by clicking on the heart icon again. In order to show just items on their Favorites list, users can click the "Show Favorites" checkbox in the left side bar.

Our two additional components with state and props include the weather widget and the Villar Users widgets on the right side of the site. We used the OpenWeather API and Axios to create the weather widget (by acquiring an API key and displaying the temperature at the user's current location). The users widget allows users to view people who have used Villar (they include hard-coded users).


DESIGN PRINCIPLES AND COMPONENTS
The Villar interface adheres to the design principles that we've learned in class this semester. Visually, we utilized a soothing green color and a clean white background as our color scheme. We believe that search interfaces should be simple so that users can easily find what they want so we wanted to keep the interface overall clean and simple so that users would have no trouble filtering homes. The overall layout includes the main center div where the villas are displayed as well as two side divs for filtering capabilities and secondary widgets like the weather and user displays. In terms of accessibility, our site's text is large enough so users with visual impediments can read descriptions comfortably. In terms of contrast, we made sure the green theme color was dark enough so that the individual divs and text are easily distinguishable from the white background. We used a thick font for the logo and heading text so that they stand out and there is a hierarchy of font thickness and sizes. We also made sure we didn't pack too much information or crowd the interface so that individual elements are easy to view. Lastly, we wanted to add the Spinner component (Spinner.jsx) to allow the user to know that the page is loading and there isn't just a blank white screen so that they are not left hanging and don't know if the page is loading or not.

As far as data passing, all components are triggered from App.js - in App.js, the Filtered List, User, Temperature, and Location components are rendered. In order to populate the Filtered List, a list variable called estates is instantiated in App.js and passed into the items object of Filtered List. The Filtered List component has several props that the user can alter when they click certain filter options in the left side bar. For example, only estates with the string "suburban" as their location will be displayed when the user clicks the Suburban radio button under Location since when the radio button is clicked, the location prop is set to its value, "suburban", and in the render function of FilteredList.jsx, if this location value is altered, the estates list object will be filtered and only the estates with the string "suburban" as their location will be displayed. This same type of functionality is true for the other filter options, such as property type and listing. 

Other components, such as Location.jsx, Temperature.jsx, and OpenWeatherAPI.jsx, are in charge of fetching temperature data from the OpenWeather API and rendering them on the website. These components are triggered from App.js as well. OpenWeatherAPI.jsx queries and fetches data from the API based on a generated API key (we have an account on the OpenWeatherAPI site that grants us a unique API key to use), Location.jsx gets information about the user's current location based on latitude and longitude props, and Temperature.jsx renders the fetched temperature in celsius of the user's current location.


THE GOAL AND PURPOSE OF VILLAR
Villar allows users to easily filter local houses by simply pressing location, property type, and listing filter options as well as sort by price from low to high (they can also search by the address of a villa in the search bar). This is valuable since if potential homeowners are searching for a home, they can just come to Villar, and hopefully in the future, purchase a home through the site. It's people's one stop shop for home searching!

