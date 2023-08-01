import Country from './Country'

const CountryList = ({ countries, showCountry }) => {
    if ( countries.length>10) {
      return (
        <div>
          Too many matches, specify another filter
        </div>
      )
    }
  
    if ( countries.length === 1) {
      return <Country country={countries[0]} />
    }
  
    return (
      <div>
        {countries.map(c =>
          <p key={c.fifa}>
            {c.name.common}
            <button onClick={() => showCountry(c.name.common)}>
              show
            </button>
          </p>
        )}
      </div>
    )
}
  
export default CountryList