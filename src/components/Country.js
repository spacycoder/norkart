import React from 'react'
import {getCountryLive} from '../api/covid';

const styles = {
    width: 'calc(100% - 14px)',
    padding: '7px',
    background: '#263859',
    margin: '10px 0',
    color: 'white',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    cursor: 'pointer'
};

const Country = (props) => {

    const onCountryClicked = (e) => {
        getCountryLive(props.country.Country, handleCountryRes)
    }

    const handleCountryRes = (res) => {
        const countryStatus = {
            features: res.map(r => {
                return {
                    properties: {
                        confirmed: r.Confirmed,
                        deaths: r.Deaths,
                        recovered: r.Recovered
                    },
                    geometry: {
                        type: 'Point',
                        coordinates: [
                            r.Lon, r.Lat
                        ]
                    }
                }
            })
        }
        props.setCountry(countryStatus);
    }

    return (
        <div style={styles} onClick={onCountryClicked}>
            <span style={{fontSize: '16px', fontWeight: '500'}}>{props.country.Country}</span>
        </div>
    );
}

export default Country;