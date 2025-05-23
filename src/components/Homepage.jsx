import "../styling/world.css"
import data from "../data.json"
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoEarth } from "react-icons/io5";

export function Headbar(){
 const headbar = document.getElementById('headbar');
 window.addEventListener('scroll', ()=>{
    if (window.scrollY > 0){
     headbar.style.boxShadow = '0 4px 6px rgba(8, 8, 8, 0.98)';
    }
 })

 return(
  <div id="headbar">
    <div>Where in the world?</div>
    <IoEarth size={30}/>
  </div>
 )
}

export function Country(){
 return(
  <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 20px"}}>
    <ol>
    {data.map((country) =>(
        <Link to={`/details/${encodeURIComponent(country.name)}`}  key={country.name} className="countryDetails">
       
           <div>
            <img src={country.flag} className="countryFlag" />
           </div>
          <div className="details">
            <li style={{marginBottom: '1rem', fontWeight: 'bold', fontSize: '20px'}}>{country.name}</li>
            <li>Population: {country.population}</li>
            <li>Region: {country.region}</li>
            <li>Capital: {country.capital}</li>
          </div>
       
       </Link>
      ))}
    </ol>
  </div>
 )
}

export function Homepage(){
    const [searchValue, setSearchValue] = useState('')
    const [result, setResult] = useState(/**@type {{name: string}[]} */ ([]))

    const handleSearch = (e) =>{
      const value = e.target.value
      setSearchValue(value)
      
      const filtered = data.filter((c) => c.name.toLowerCase().includes(value.toLowerCase()))
      setResult(filtered)
    }

 return(
  <div>
    <Headbar/>
    <div className="search-box">
      <input type="text" id="searchbar" className="search bar" placeholder="Search for a country..." value={searchValue} autoCapitalize="words" onChange={handleSearch}/>

      <div id="results" style={{display: searchValue? "block": 'none'}}>
        {
          result.length > 0 ? (
            result.map((country) => (
              <Link key={country.name} to={`/details/${country.name}`}>
                <li>{country.name}</li>
              </Link>
            ))
          ) : (
            searchValue && <p>Check your spelling</p>
          )
        }

    </div>

        <div style={{marginTop: "1.5rem"}}>
          <Country />
        </div>

  </div>
  </div>
  )
}

export default Homepage
