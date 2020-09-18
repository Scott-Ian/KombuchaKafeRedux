# <h1 align = "center"> Kombucha Kafe

## <h3 align = "center"> Single Page React Web Application

## <h2 align = "center"> About

<p align = "center"> This is an application for a kombucha bar that manages beverages on tap, amount remaining in a keg, and popularity/number of times a drink has been ordered. It also allows for a user to order, add, delete, or alter a beverage. This application uses Redux to maintain all state in a central store. There is no local state stored in this application.

## <h2 align = "center"> Initial App Mockup
![image](./ReadmeImages/KombuchaKafeMockup.jpg)

## <h2 align = "center"> Individual Kombucha Card Mockup
![image](./ReadmeImages/KombuchaCardMockup.jpg)

## **✅REQUIREMENTS**
* Install [Visual Studio Code](https://code.visualstudio.com/)

## **💻SETUP**
* to clone this content, copy the url provided by the 'clone or download' button in GitHub
* in command line use the command 'git clone (https://github.com/Scott-Ian/KombuchaKafeRedux.git)'
* open the program in a code editor
* in the command/termminal line enter the command "npm start" to run the program
* if the project does not open on its own, in your preferred web-browser navigate to: localhost: 3000
__

## User Stories

* As a user, I want to see a list/menu of all available kegs. For each keg, I want to see its name, brewery, price, and description.
* As a suer, I want to submit a form to add a new keg to a list.
* As a user I want to be able to edit an existing beverage/keg.
* As a user, I want to see how many pints are left in a keg.
* As a user, I want to be able to click a button next to a keg whenever I sell a pint of it. This should decrease the number of p ints left by 1. Pints should not be able to go below 0.
* As a user, I want to be able to restock a keg, and have a fresh keg amount be represented in the system.
* As a user, I want to know how many times a drink has been ordered.
* As a user, I want a Top Sellers list to display the most popular beverages.

## <h2 align = "center"> Component Relationships
![image](./ReadmeImages/ComponentRelationshipsPropMap.jpg)


## Known Bugs

_There are some known bugs with the current version. The Top Sellers list had to be deactivated for this iteration, as time constraints prevented dedicating the time needed to implement that functionality. The placeholder information for editing a card had to be commented out. I am not sure where in the code my kombuchaId identifier is being nulled. Also editing a kombucha entry, just ends up generating a new entry and not replacing the previous entry._ 

_Additionally, styling is not complete. I was having trouble integrating CSS grid with this REACT application. A further exploration I was not able to accomplish due to time limitations was implementing the search bar at the top of the screen to only display beverages whose name or description contain the search string._

## Support and contact details

Contact : Ian Scott

## Technologies Used

* JS
* React
* Redux
* CSS
* HTML


## **📘 License**
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)