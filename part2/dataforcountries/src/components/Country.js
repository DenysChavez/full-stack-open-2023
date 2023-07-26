import React from 'react';

const Country = ({ country }) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <div>Capital: {country.capital}</div>
      <div>Area: {country.area} sq. km</div>
      <img src={country.flags.png} alt={`flag of ${country.name.common}`} />
      <h2>Languages:</h2>
      <ul>
        {Object.values(country.languages).map((language, index) => <li key={index}>{language}</li>)}
      </ul>
    </div>
  )
};

export default Country;