import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';

function Header () {
    return (
        <AppBar position='static'>
            <Container sx={{ backgroundColor: "white", minWidth: "100%", height: "15vh"}}>
                <Toolbar>
                    <Typography sx={{ textDecoration: "none", color: "inherit", paddingLeft: "2rem"}}>Where in the World?</Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header