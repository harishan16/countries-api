import { Container , Box   } from "@mui/material"
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useFetcher, useNavigate } from "react-router-dom";
import { CardActionArea, CardMedia, Typography } from '@mui/material';
// import './CountryCard.scss';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from 'axios';



function CountryDetails () {

    const { id } = useParams();
    const navigate = useNavigate();
    const [ details, setDetails ] = useState([]);

    const oneCountryUrl = "https://restcountries.com/v3.1/name/";

    console.log(id);

      // Fetch single country details
  useEffect(() => {
    const oneCountryDetails = async () => {
        try {
            const {data} = await axios.get(`${oneCountryUrl}${id}`);
            console.log(data);
            setDetails(data);
            // setIsError(false);
            // setIsLoading(false);
        }
        catch (error) {
            // setIsError(true);
            console.log(`Could not fetch data ${error}`);
        }
    }
    oneCountryDetails();
}, [])

const handle = () => {
    navigate('/');
}

    return (
        <Container disableGutters maxWidth="xl" sx={{ p: { xs: "2rem 3rem", sm: "2rem 3rem", md: "3rem 8rem"}, display: "flex", flexWrap: "wrap", flexDirection: "column" }}>
           <Box >
                <Button variant="outlined" onClick={handle} startIcon={ <ArrowBackIcon /> }>Back to List</Button>
                <Typography> {id}</Typography>
                <Container>
                {details.map((detail) => (
                        <Box key={detail.cca3} sx={{display: "flex", flexWrap: "wrap", flexDirection: "column" }}>
                            <CardMedia component="img" sx={{ height: "30vh", width: {xs: "100%", sm: "100%", md: "50%"}}} image={detail.flags.svg} alt={`${detail.name.common} flag`}/>
                            <CardContent>
                                <Typography component="div" variant="h4" sx={{ fontWeight: 'bold', py:2}}>{detail.name.common}</Typography>
                                <Typography component="div" variant="h5" sx={{ py:0.5}}>Native Name: <span>{detail.name?.nativeName
                                    ? Object.values(detail.name.nativeName).map((nameObj, index) => (
                                        <span key={index}>
                                            {nameObj.common}
                                            {index < Object.values(detail.name.nativeName).length - 1 && ', '}
                                        </span>
                                        ))
                                    : 'Unknown'}
                                    </span></Typography>
                                <Typography component="div" variant="h5" sx={{ py:0.5}}>Population: <span>{detail.population}</span></Typography>
                                <Typography component="div" variant="h5" sx={{ py:0.5}}>Region: <span>{detail.region}</span></Typography>
                                <Typography component="div" variant="h5" sx={{ py:0.5}}>Sub Region: <span>{detail.subregion? detail.subregion : 'Unknown'}</span></Typography>
                                <Typography component="div" variant="h5" sx={{ py:0.5}}>Capital: 
                                    {
                                        detail.capital? detail.capital : 'Unknown'
                                    }<span>{detail.capital}</span></Typography>
                                <Typography component="div" variant="h5" sx={{ py:0.5}}>Top Level Domain: <span>{detail.capital}</span></Typography>
                                <Typography component="div" variant="h5" sx={{ py:0.5}}>Currencies: <span>
                                    {detail.currencies
                                    ? Object.values(detail.currencies).map((currency, index) => (
                                        <span key={index}>
                                            {currency.name}
                                            {index < Object.values(detail.currencies).length - 1 && ', '}
                                        </span>
                                        ))
                                    : 'Unknown'}
                                    </span></Typography>
                                <Typography component="div" variant="h5" sx={{ py:0.5}}>Languages: <span>
                                    {detail.languages ? 
                                    Object.values(detail.languages).map((language, index) => {
                                        return (
                                        <span key={index}>
                                            {language}
                                            {index < Object.values(detail.languages).length - 1 && ', '}
                                            </span>
                                            );
                                    })
                                    : 'Unknown'
                                }
                                    </span></Typography>
                            </CardContent>

                        </Box>
                    )
                )}

                </Container>
            
            </Box>
        </Container>
    )
}

export default CountryDetails