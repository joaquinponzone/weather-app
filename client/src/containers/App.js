import React, { useState } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Nav from "../components/Nav.jsx";
import Main from "../components/Main.jsx";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../components/GlobalStyles";
import { lightTheme, darkTheme } from "../components/Themes";

const apiKey = "4ae2636d8dfbdc3044bede63951a019b";

function App() {
  const [cities, setCities] = useState([]);

  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }

  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };

          if (!onFilter(ciudad.id))
            setCities((oldCities) => [...oldCities, ciudad]);
          else alert("Ya buscaste esa ciudad.");
        } else alert("No se encontró ninguna ciudad con ese nombre.");
      });
  }

  function onFilter(ciudadId) {
    let ciudad = cities.filter((c) => c.id === parseInt(ciudadId));
    if (ciudad.length > 0) return ciudad[0];
    else return null;
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div className="app">
          <Route path="/" render={() => <Nav onSearch={onSearch} theme={theme} themeToggler={themeToggler}/>} />
          <Route
            path="/"
            render={() => <Main cities={cities} onClose={onClose} />}
          />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
