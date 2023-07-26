import React, { useState } from 'react';
import axios from 'axios';
import Country from './Country';

const Search = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    if (event.target.value !== '') {
      axios
        .get('https://studies.cs.helsinki.fi/restcountries/api/all')
        .then(response => {
          setCountries(response.data);
        });
    } else {
      setCountries([]);
    }
  };

  let content;

  if (countries.length > 10) {
    content = <div>Too many matches, specify another filter</div>;
  } else if (countries.length > 1) {
    content = countries.map(country => <div key={country.cca3}>{country.name.common}</div>);
  } else if (countries.length === 1) {
    content = <Country country={countries[0]} />;
  }

  return (
    <div>
      Find countries: <input onChange={handleSearchChange} value={search} />
      {content}
    </div>
  );
};

export default Search;