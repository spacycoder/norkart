

export const getWorldTotal = async (callbackFunc) => {
    const res = await fetch('https://api.covid19api.com/world/total');
    const json = await res.json();
    callbackFunc(json);
}


export const getCountryLive = async (country, callback) => {
    const res = await fetch(`https://api.covid19api.com/live/country/${country}/status/confirmed`);
    const json = await res.json();
    callback(json)
}

export const getCountries = async (callback) => {
    const res = await fetch(`https://api.covid19api.com/summary`);
    const json = await res.json();
    callback(json)
}