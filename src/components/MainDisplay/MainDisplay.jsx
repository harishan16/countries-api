import CountryCard from '../CountryCard/CountryCard';
import './MainDisplay.scss';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { Container, Menu } from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';

// eslint-disable-next-line react/prop-types
function MainDisplay ({list, selectedRegion, countriesList, countrySearched}) {

    const [region, setRegion] = useState("All Regions");
    const [countrySearch, setCountrySearch] = useState("");

    // To extract unique regions
    // eslint-disable-next-line react/prop-types
    const regions = countriesList.map((country) => { return country.region })
    const uniqueRegions = ["All Regions", ...new Set(regions)];

    // To retrieve countries names
    // eslint-disable-next-line react/prop-types
    const countries = countriesList.map((country) => { return country.name.official})

    // Function to handle region filter dropdown 
    const handleRegionFilter = (event) => {
        event.preventDefault();
        setCountrySearch('');
        const selectedValue = event.target.value;
        console.log(event.target.value);
        setRegion(selectedValue);
        selectedRegion(selectedValue);
    }

    // Function to handle searching a country 
    const handleCountrySearch = (event, value) => {
        console.log(value);
        setRegion("All Regions");
        setCountrySearch(value);
        countrySearched(value);
    }

    return (
            <Container disableGutters maxWidth="xl" sx={{ p: { xs: "2rem 3rem", sm: "2rem 3rem", md: "3rem 8rem"}, display: "flex", flexWrap: "wrap", flexDirection: "column" }}>
                
                <Box sx={{width: "100%", display: "flex", flexDirection : { xs: "column", sm: "column", md: "row"}, justifyContent: "space-between", alignItems: "center" }}>
                    
                    {/* <Box sx = {{ }}> */}
                        <Autocomplete 
                                disablePortal 
                                options={countries}
                                onChange={handleCountrySearch}
                                forcePopupIcon={false}
                                // startIcon={ <SearchIcon /> }
                                value={countrySearch}
                                sx={{ width: { xs: "100%", sm: "100%", md: "30%"}}}
                                renderInput={(params) => <TextField {...params} label="Search a Country Name" />}>
                        </Autocomplete>

                        <Select sx={{  width: { xs: "100%", sm: "100%", md: "20%"} }}
                                labelId="filter-region"  
                                value = {region} 
                                onChange={handleRegionFilter}>
                                { uniqueRegions.map((region) => {
                                    return <MenuItem key={region} value={region}>{region}</MenuItem>
                                })
                                }
                            </Select>
                    {/* </Box> */}
                    
                    {/* <Box sx = {{ width: { xs: "100%", sm: "100%", md: "60%"}}}> */}
                        
                    {/* </Box> */}
                </Box>
                <Box>
                    <CountryCard list = {list}></CountryCard>
                </Box>
            </Container>
    )
}

export default MainDisplay