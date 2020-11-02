import React from "react";
import CovidInfo from "./components/CovidInfo";
import MapboxGLMap from "./components/MapboxGLMap";
import { useState } from "react";
const styles = {
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row'
}

function App() {
    const [country, setCountry] = useState(null);

    return ( < div style = { styles } >
        <CovidInfo setCountry={setCountry} />
        <MapboxGLMap country={country}/>
        </div>
    );
}

export default App;