import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  // state initialize
  const [countries, setCountries] = useState([]);
  // fetch api data
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then(data => setCountries(data));
  }, []);
  return (
    <div className="App">
      <h1>Data Loaded: {countries.length}</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
