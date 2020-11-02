import React, { useEffect, useState } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import { getCountries } from '../api/covid';
import Country from './Country';

const styles = {
    height: '100vh',
    boxSizing: 'border-box',
    width: '20%',
    textAlign: 'center',
    fontSize: '30px',
    background: '#17223b',
    color: 'white',
};

const CovidInfo = (props) => {
    const [countries, setCountries] = useState(null);

    useEffect(() => {
        getCountries(handleCountryResponse)
    }, [])

    const handleCountryResponse = (json) => {
        setCountries(json)
    }

    if (countries == null) {
        return (
            <div style={styles} >
                Countries
                <div styles={{ margin: 'auto' }}>
                    <ClipLoader
                        size={150}
                        color={"#123abc"}
                    />
                </div>
            </div>
        )
    }

    const setCountry = (country) => {
        props.setCountry(country);
    }

    return (
        <div style={styles} >
            <div sytle={{position: 'sticky', height: '50px', padding: '20px'}}>Covid Cases</div>
            <div style={{ display: 'flex', flexFlow: 'column', overflowY: 'scroll', maxHeight: 'calc(100vh - 60px)', width:'100%'}}>
                {countries.Countries.map(country => {
                    console.log(country)
                    return <Country key={country.Country + country.Date} country={country} setCountry={setCountry}/>
                }
                )
                }
            </div>
        </div>
    )
}

export default CovidInfo