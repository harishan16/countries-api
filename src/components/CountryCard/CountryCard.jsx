import { CardActionArea, CardMedia, Typography } from '@mui/material';
import './CountryCard.scss';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';


// eslint-disable-next-line react/prop-types
function CountryCard ({list}) {


    return (
             <Container disableGutters maxWidth="xl" sx={{ pt: 4, pb: 2 }}>
                    <Grid container spacing = {6} justifyContent="center">
                    {
                        // eslint-disable-next-line react/prop-types
                        list.map((country) => (
                            <Grid key={`${country.name.common}`} >
                                <Link to={`/country-info/name/${country.name.common}`} style={{ textDecoration: 'none' }}>
                                    <Card  sx={{ boxShadow: '0 0 12px  rgba(0, 0, 0, 0.1)', width: 263, height: 450, borderRadius: 2 , }}>
                                        {/* <CardActionArea onClick={handleCountrySelect(country.cca3)}> */}
                                            <CardMedia component="img" sx={{ height: "30vh"}} image={country.flags.svg} alt={`${country.name.common} flag`}/>
                                            <CardContent>
                                                <Typography component="div" variant="h4" sx={{ fontWeight: 'bold', py:2}}>{country.name.official}</Typography>
                                                <Typography component="div" variant="h5" sx={{ py:0.5}}>Population: <span>{country.population}</span></Typography>
                                                <Typography component="div" variant="h5" sx={{ py:0.5}}>Region: <span>{country.region}</span></Typography>
                                                <Typography component="div" variant="h5" sx={{ py:0.5}}>Capital: <span>{country.capital}</span></Typography>
                                            </CardContent>
                                        {/* </CardActionArea> */}
                                    </Card> 
                                    </Link>
                            </Grid>
                        ))      
        }
        </Grid>
        </Container>
    )
}

export default CountryCard