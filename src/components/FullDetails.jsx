import { useParams } from 'react-router-dom'
import '../styling/world.css'
import { Headbar } from './Homepage'
import countryData from '../data.json'
import { Link } from "react-router-dom";
// import backIcon from "/asset/back-icon (1).svg"
// import backIcon from "../asset/back-icon (1).svg"

export function CountryComponent(){
 const { countryName } = useParams()
 const country = countryData.find((c) => c.name === countryName)
 const alphaCodeToName = {}
 countryData.forEach(ctry => {alphaCodeToName[ctry.alpha3Code] = ctry.name})
 const getBorderNames = (borderAbbv) => {
  return borderAbbv.map(abbv => alphaCodeToName[abbv] || abbv)
 }

 if(!country) return <h2>Country Not Found!</h2>;
 
 return(
    <div id='countryDisplay'>

     <img src={country.flag} id='flag' alt="flag" />
      <ul>
         <li style={{fontSize: "30px", fontWeight: "bold"}}>{country.name}</li>
         <li>Native Name: {country.nativeName}</li>
         <li>Population: {country.population}</li>
         <li>Region: {country.region}</li>
         <li>Sub Region: {country.subregion}</li>
         <li>Capital: {country.capital}</li>
         
           <div>
             <li>Top Level Domain: {country.topLevelDomain}</li>
             <li>Currencies: {country.currencies.map((currency) => currency.name).join(", ")}</li>
             <li>Languages: {country.languages.map((language) => language.name).join(", ")}</li>
           </div>

          <section>
           
           <h3>Border Countries:</h3>
           
                   <ul>
                      {country.borders.map(code => (
                        <Link to={`/details/${alphaCodeToName[code]}`} className='linkNav'>
                          <li key={code} className='borderDisplay'>{alphaCodeToName[code] || code}</li>
                        </Link>
                      ))}
                   </ul>
           
          </section>   
      </ul>

   </div>
 )
}

export function FullDetails(){
 return(
  <div id='fulldetails'>

    <Headbar />
    <Link to='/'>
        <button className='search back'>Back</button>
    </Link>
    <CountryComponent />

  </div>
 )
}

export default FullDetails