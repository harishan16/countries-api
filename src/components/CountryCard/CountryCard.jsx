import { CardActionArea, CardMedia, Typography } from '@mui/material';
import './CountryCard.scss';
// import Card from '@mui/material/Card';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


// eslint-disable-next-line react/prop-types
function CountryCard ({list}) {

    return (
        <section className="single-card">
        {
            // eslint-disable-next-line react/prop-types
            list.map((country) => {
                return (
                    <section key={country.cca3}>
                        <img src="" className="" />  
                        <Card sx={{ boxShadow: '0 0 12px  rgba(0, 0, 0, 0.1)' , borderRadius: 2}}>
                            <CardActionArea>
                                <CardMedia component="img" sx={{ height: "30vh"}} image={country.flags.svg} alt={`${country.name.common} flag`}/>
                                <CardContent>
                                    <Typography component="div" variant="h4" sx={{ fontWeight: 'bold', py:2}}>{country.name.official}</Typography>
                                    <Typography component="div" variant="h5" sx={{ py:0.5}}>Population: <span>{country.population}</span></Typography>
                                    <Typography component="div" variant="h5" sx={{ py:0.5}}>Region: <span>{country.region}</span></Typography>
                                    <Typography component="div" variant="h5" sx={{ py:0.5}}>Capital: <span>{country.capital}</span></Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card> 
                    </section>
                )
            })
        }
        </section>
    )
}

export default CountryCard