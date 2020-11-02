import React, { useEffect, useRef, useState } from "react";
import mapboxgl, {} from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { befolkning } from './befolkning';


const styles = {
    width: "100%",
    height: "100vh",
};



const MapboxGLMap = (props) => {
    const country = props.country;

    let center = [10.408773, 63.422091];



    const [map, setMap] = useState(null);
    const mapContainer = useRef(null);

    if (country) {
        const lonString = country.features[0].geometry.coordinates[0];
        const latString = country.features[0].geometry.coordinates[1];
        const lon = parseFloat(lonString);
        const lat = parseFloat(latString);
        center = [lon, lat];
        if (map) {
            map.flyTo({
                center: [
                    lon,
                    lat
                ],
                essential: true // this animation is considered essential with respect to prefers-reduced-motion
            });
        }
    }

    useEffect(() => {
        mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;
        const initializeMap = ({ setMap, mapContainer }) => {
            const map = new mapboxgl.Map({
                container: mapContainer.current,
                style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
                center: center,
                zoom: 6
            });

            map.on("load", () => {
                const population = JSON.parse(befolkning);
                map.addSource('population', {
                    type: 'geojson',
                    data: population
                });

                const features = population.features;
                let min = 999999;
                let max = -999999;
                for (let i = 0; i < features.length; i++) {
                    const pop_tot = features[i].properties.pop_tot;
                    max = Math.max(max, pop_tot)
                    min = Math.min(min, pop_tot)
                }

                map.addLayer({
                    id: 'population',
                    type: 'fill-extrusion',
                    source: 'population',
                    layout: {},
                    paint: {
                        'fill-extrusion-color': {
                            property: 'pop_tot', // this will be your density property form you geojson
                            stops: [
                                [min, '#00FF00'],
                                [max, '#FF0000'],
                            ]
                        },
                        'fill-extrusion-height': ['get', 'pop_tot'],
                    }
                });
                setMap(map);
                map.resize();
            });
        };

        if (!map) initializeMap({ setMap, mapContainer });


    }, [map]);

    return <div ref = { el => (mapContainer.current = el) }
    style = { styles }
    />;
};

export default MapboxGLMap;