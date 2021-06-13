import React, {useState} from "react";
import "./index.css"

const api ={
  key: "0cc053d27d38802b10e3aa1d9b66c248",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const dateBuilder = (e) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[e.getDay()];
    let date = e.getDate();
    let month = months[e.getMonth()];
    let year = e.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState("");

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
        .then(res => res.json())
        .then(result => {setWeather(result); setQuery('')});
    }
  }

  return (
    <div className="app ">
      <div className="container">
        <div className="contents">
          <div className="searchBar">
            <input type="text" className="searchBox" placeholder="Search..." onChange={e => setQuery(e.target.value)} value={query} onKeyPress={search}/>
          </div>
          {(typeof weather.main != "undefined") ? (
          <div className="info">
            <div className="hero_1">
              <div className="temperature">{Math.round(weather.main.temp)}°c</div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
            <div className="hero_2">
              <div className="location">
                <div className="locationTitle">Location</div>
                <span className="divider"></span>
                <div className="locationDescription">{weather.name}, {weather.sys.country}</div>
              </div>
              <div className="date">
                <div className="dateTitle">Date</div>
                <span className="divider"></span>
                <div className="dateDescription">{dateBuilder(new Date())}</div>
              </div>
            </div>
          </div>
          ) : ('')}
        </div>
      </div>
    </ div>
  );
}

export default App;
