// import './App.scss'
import Header from './components/Header/Header'
import CountryDetails from './components/CountryDetails/CountryDetails'
import MainDisplay from './components/MainDisplay/MainDisplay';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, responsiveFontSizes } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: "'Nunito Sans', sans-serif",
    fontSize: 14, // base font size in px (usually 14 or 16)
    h1: {
      fontSize: '3rem',
    },
    h2: {
      fontSize: '2.25rem',
    },
    h3: {
      fontSize: '1.875rem',
    },
    h4: {
      fontSize: '1.5rem',
    },
    h5: {
      fontSize: '1rem',
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#fff',
          color: '#000'
        },
        a: {
          textDecoration: 'none',
          color: 'inherit',
        },
      },
    },
  },
});


const allCountriesUrl = "https://restcountries.com/v3.1/all";

function App() {

  // console.log(params);


  const [countriesList, setCountriesList] = useState([]);
  const [countryDetails, setCountryDetails] = useState([]);
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
            const {data} = await axios.get(allCountriesUrl);
            console.log(data);
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
      <ThemeProvider theme={theme}>
      <CssBaseline />
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
                <Route path="/country-info/name/:id" element={<CountryDetails />} />
            
            </Routes>
        </BrowserRouter>
      </ThemeProvider>
      
      </>
  )
}

export default App
