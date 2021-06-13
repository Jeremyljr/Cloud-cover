import React from "react";
import "./index.css"

const api ={
  key: "0cc053d27d38802b10e3aa1d9b66c248",
  base: "htps://api.openweathermap.org/data/2.5/"
}

function App() {
  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className="app ">
      <div className="container">
        <div className="contents">
          <div className="searchBar">
            <input type="text" className="searchBox" placeholder="Search..."/>
          </div>
          <div className="hero_1">
            <div className="temperature">16c</div>
            <div className="weather">sunny</div>
          </div>
          <div className="hero_2">
            <div className="location">
              <div className="locationTitle">Location</div>
              <span className="divider"></span>
              <div className="locationDescription">New York City, US</div>
            </div>
            <div className="date">
              <div className="dateTitle">Date</div>
              <span className="divider"></span>
              <div className="dateDescription">{dateBuilder(new Date())}</div>
            </div>
          </div>
        </div>
      </div>
    </ div>
  );
}

export default App;
