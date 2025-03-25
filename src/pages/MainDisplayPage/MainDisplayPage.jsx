import axios from 'axios';
import MainDisplay from '../../components/MainDisplay/MainDisplay';
import { useEffect } from 'react';
import { useState } from 'react';

const url = "https://restcountries.com/v3.1/all";

function MainDisplayPage () {
    console.log(url);
    const [countriesList, setCountriesList] = useState([]);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getAll = async () => {
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
        getAll();
    }, [])

    if(isError) {
        return <h1>Sorry, there was an error fetching the data</h1>
    }

    if(isLoading) {
        return <h1>Data Loading..</h1>
    }

    return (
        <>
        <MainDisplay list = {countriesList}></MainDisplay>
        </>

    )
}  
export default MainDisplayPage;

 