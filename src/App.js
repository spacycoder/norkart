import React from "react";
import Header from "./components/Header";
import CovidInfo from "./components/CovidInfo";
import MapboxGLMap from "./components/MapboxGLMap";

const styles = {
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row'
}

function App() {
    return ( < div style = { styles } >
        <CovidInfo/>
        <MapboxGLMap/>
        </div>
    );
}

export default App;