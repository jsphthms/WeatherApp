import React, {
  useState
} from 'react';
import './App.css';
import Title from './components/Title'
import Form from './components/Form'
import Weather from './components/Weather'

function App() {
  const API_KEY = `${process.env.REACT_APP_KEY}`

  const [weather, setWeather] = useState([])

  const getWeather = async (e) => {
    var city = e.target.elements.city.value;
    var state = e.target.elements.state.value;
    var country = e.target.elements.country.value;
    if (city && state) {
      e.preventDefault();

      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&appid=${API_KEY}&lang=11&units=imperial`);
      const data = await response.json();
      setWeather({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: undefined
      });
    } else {
      e.preventDefault();
      setWeather({
        temp: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: 'Please enter a city'
      })
    }

  };

  return ( <
    div className = "App" >
    <
    div className = "wrapper" >
    <
    div className = "main" > {
      /* <div className="container"> */
    } <
    div className = "row" >
    <
    div className = "col-md-5 title-container" >
    <
    Title / >
    <
    /div> <
    div className = "col-md-7 form-container" >
    <
    Form getWeather = {
      getWeather
    }
    /> <
    Weather city = {
      weather.city
    }
    temp = {
      weather.temp
    }
    country = {
      weather.country
    }
    humidity = {
      weather.humidity
    }
    desc = {
      weather.description
    }
    error = {
      weather.error
    }
    /> < /
    div > <
    /div> < /
    div > {
      /* </div> */
    } <
    /div> < /
    div >
  );
}

export default App;