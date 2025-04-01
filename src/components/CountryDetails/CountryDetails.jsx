import { Container , Box   } from "@mui/material"
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";

function CountryDetails () {
    let navigate = useNavigate();

    const handle = () => {
        navigate('/');
    }
    return (
        <Container disableGutters maxWidth="xl" sx={{ p: { xs: "2rem 3rem", sm: "2rem 3rem", md: "3rem 8rem"}, display: "flex", flexWrap: "wrap", flexDirection: "column" }}>
           <Box sx = {{ width: { xs: "100%", sm: "100%", md: "60%"}}}>
                <Button variant="outlined" onClick={handle} startIcon={ <ArrowBackIcon /> }>Back to List</Button>
            {

            }
            </Box>
        </Container>
    )
}

export default CountryDetails