import React from "react";

const Country = (props) => {
  const { name, population, region, flags } = props.country;
  //add handler
  const addCountry = props.addCountry;
  //style
  const flagStyle = { height: "60px" };
  const countryStyle = { margin: "10px", border: "1px solid green" };
  const buttonStyle = {
    padding: "5px",
    backgroundColor: "gray",
    marginBottom: "5px",
    cursor: "pointer",
  };

  return (
    <div style={countryStyle}>
      <h3>{name.common}</h3>
      <img style={flagStyle} src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Region: {region}</p>
      <button onClick={() => addCountry(props.country)} style={buttonStyle}>
        Add Country
      </button>
    </div>
  );
};

export default Country;
