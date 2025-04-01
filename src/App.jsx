// import { BrowserRouter } from 'react-router-dom'÷
import './App.scss'
import Header from './components/Header/Header'
import CountryDetails from './components/CountryDetails/CountryDetails'
// import MainDisplayPage from './pages/MainDisplayPage/MainDisplayPage'
import MainDisplay from './components/MainDisplay/MainDisplay';

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';


const url = "https://restcountries.com/v3.1/all";

function App() {

  const [countriesList, setCountriesList] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [selectedRegion, setSelectedRegion] = useState("All Regions");
  const [searchedcountry, setSearchedcountry] = useState("");
  const [displayList, setDisplayList] = useState([]);

  const handleSelectedRegion = (region) => {
      console.log(region);
      setSelectedRegion(region);
  }

  const handleSearchedCountry = (country) => {
      console.log(country);
      setSearchedcountry(country);
  }

  

  // Fetch all countries list
  useEffect(() => {
    const getAllCountries = async () => {
        try {
            const {data} = await axios.get(url);
            setCountriesList(data);
            setIsError(false);
            setIsLoading(false);
        }
        catch (error) {
            setIsError(true);
            console.log(`Could not fetch data ${error}`);
        }
    }
    getAllCountries();
}, [])

// Fetch countries based on selected region
useEffect(() => {
  if(selectedRegion == "All Regions"){
      setDisplayList(countriesList);
  }
  else {
      const getRegionBased = async () => {
          try {
              const {data} = await axios.get(`https://restcountries.com/v3.1/region/${selectedRegion}`);
              setDisplayList(data);
              // setIsError(false);
              // setIsLoading(false);
          }
          catch (error) {
              setIsError(true);
              console.log(`Could not fetch region based countries ${error}`);
          }
      }
      getRegionBased();
  }
}, [selectedRegion, countriesList]);

  useEffect(() => {
      if(!searchedcountry){
          setDisplayList(countriesList);
      }
      else {
          const getOneCountry = async () => {
              try {
                  const {data} = await axios.get(`https://restcountries.com/v3.1/name/${searchedcountry}`);
                  setDisplayList(data);
                  // setIsError(false);
                  // setIsLoading(false);   
              }
              catch (error) {
                  setIsError(true);
                  console.log(`Could not fetch country ${error}`);
              }
          }
          getOneCountry();
  }
  }, [searchedcountry, countriesList]);




if(isError) {
  return <h1>Sorry, there was an error fetching the data</h1>
}

if(isLoading) {
  return <h1>Data Loading..</h1>
}

  return (
      <>
      <BrowserRouter>
      <Header></Header>
        <Routes>
            <Route path="/" element={
              <MainDisplay list = {displayList} 
                      selectedRegion= {handleSelectedRegion} 
                      countriesList={countriesList}
                      countrySearched={handleSearchedCountry}>
              </MainDisplay>
              } />
            <Route path="/country-info" element={<CountryDetails />} />
          
        </Routes>
      </BrowserRouter>
       
        
      </>
  )
}

export default App
