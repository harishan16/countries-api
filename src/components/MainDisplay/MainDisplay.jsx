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

// eslint-disable-next-line react/prop-types
function MainDisplay ({list, selectedRegion, countriesList}) {

    const [region, setRegion] = useState("");
    const [inputValue, setInputValue] = useState("");

    // To extract unique regions
    // eslint-disable-next-line react/prop-types
    const regions = countriesList.map((country) => { return country.region })
    const uniqueRegions = ["All", ...new Set(regions)];

    // To retrieve countries names
    // eslint-disable-next-line react/prop-types
    const countries = list.map((country) => { return country.name.official})

    // Function to handle region filter dropdown 
    const handleRegionFilter = (event) => {
        event.preventDefault();
        const selectedValue = event.target.value;
        console.log(event.target.value);
        setRegion(selectedValue);
        selectedRegion(selectedValue);
    }

    // Function to handle searching a country 
    const handleCountrySearch = (event, value) => {
        console.log(value);
    }

    return (
            <Container disableGutters maxWidth="xl" sx={{ p: { xs: "2rem 3rem", sm: "2rem 3rem", md: "3rem 8rem"}, display: "flex", flexWrap: "wrap", flexDirection: "column" }}>
                <Box sx={{ display: "flex", flexDirection : { xs: "column", sm: "column", md: "row"}, gap: 2, width: "100%", justifyContent: "space-between", alignItems: "center"}}>
                    <Box sx = {{ width: { xs: "100%", sm: "100%", md: "60%"}}}>
                        <Autocomplete 
                                disablePortal 
                                options={countries}
                                onChange={handleCountrySearch}
                                sx={{ width: { xs: "100%", sm: "100%", md: "60%"}}}
                                renderInput={(params) => <TextField {...params} label="Search a Country Name" />}
                        >
                        </Autocomplete>
                    </Box>
                    <Box sx = {{ width: { xs: "100%", sm: "100%", md: "60%"}}}>
                        <FormControl sx={{  width: { xs: "100%", sm: "100%", md: "60%"} }}>
                            <InputLabel id="filter-region">Filter by Region</InputLabel>
                            <Select 
                                disablePortal
                                labelId="filter-region"  
                                value = {region} 
                                onChange={handleRegionFilter}
                            >
                                { uniqueRegions.map((region) => {
                                    return <MenuItem key={region} value={region}>{region}</MenuItem>
                                })
                                }
                            </Select>
                        </FormControl>
                    </Box>
                </Box>
                <Box>
                    <CountryCard list = {list}></CountryCard>
                </Box>
            </Container>
    )
}

export default MainDisplay