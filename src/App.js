import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Country from "./components/Country/Country";

function App() {
  // state initialize
  const [countries, setCountries] = useState([]);
  const [cartCountry, setCartCountry] = useState([]);
  // fetch api data
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((error) => console.log(error));
  }, []);

  // add country handler
  const addCountry = (country) => {
    const newCountry = [...cartCountry, country];
    setCartCountry(newCountry);
  };
  return (
    <div className="App">
      <h3>Country Added: {cartCountry.length}</h3>
      <ul>
        {countries.map((country) => (
          <Country
            country={country}
            addCountry={addCountry}
            key={country.name.common}
          ></Country>
        ))}
      </ul>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
