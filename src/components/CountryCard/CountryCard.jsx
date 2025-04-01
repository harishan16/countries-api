import { CardActionArea, CardMedia, Typography } from '@mui/material';
import './CountryCard.scss';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useNavigate} from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function CountryCard ({list}) {
    let navigate = useNavigate();

    const handleCountrySelect = () => {
        navigate('/country-info');
    }

    return (
             <Container disableGutters maxWidth="xl" sx={{ pt: 2, pb: 2 }}>
                    <Grid container spacing = {3} justifyContent="center">
                    {
                        // eslint-disable-next-line react/prop-types
                        list.map((country) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={country.cca3} >
                                    <Card  sx={{ boxShadow: '0 0 12px  rgba(0, 0, 0, 0.1)' , borderRadius: 2 , }}>
                                        <CardActionArea onClick={handleCountrySelect}>
                                            <CardMedia component="img" sx={{ height: "30vh"}} image={country.flags.svg} alt={`${country.name.common} flag`}/>
                                            <CardContent>
                                                <Typography component="div" variant="h4" sx={{ fontWeight: 'bold', py:2}}>{country.name.official}</Typography>
                                                <Typography component="div" variant="h5" sx={{ py:0.5}}>Population: <span>{country.population}</span></Typography>
                                                <Typography component="div" variant="h5" sx={{ py:0.5}}>Region: <span>{country.region}</span></Typography>
                                                <Typography component="div" variant="h5" sx={{ py:0.5}}>Capital: <span>{country.capital}</span></Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card> 
                            </Grid>
                        ))      
        }
        </Grid>
        </Container>
    )
}

export default CountryCard