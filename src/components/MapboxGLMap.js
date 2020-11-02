import React, { useEffect, useRef, useState } from "react";
import mapboxgl, {} from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { befolkning } from './befolkning';


const styles = {
    width: "100%",
    height: "100vh",
};



const MapboxGLMap = (props) => {
    /* const moveTo = props; */

    const [map, setMap] = useState(null);
    const mapContainer = useRef(null);

    function moveTo() {
        map.moveTo(props.x, props.y);
    }

    useEffect(() => {
        mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;
        const initializeMap = ({ setMap, mapContainer }) => {
            const map = new mapboxgl.Map({
                container: mapContainer.current,
                style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
                center: [10.408773, 63.422091],
                zoom: 10
            });

            map.on("load", () => {
                const cases = {
                    type: "FeatureCollection",
                    name: "covid",
                    crs: {
                        type: "name",
                        properties: {
                            name: "urn:ogc:def:crs:OGC:1.3:CRS84"
                        }
                    },
                    features: [{
                            type: "Feature",
                            properties: {
                                confirmed: 20505,
                                deaths: 666,
                                recovered: 6415,
                                active: 13424,
                            },
                            geometry: {
                                type: "Point",
                                coordinates: [10.408773, 63.422091]
                            }
                        },
                        {
                            type: "Feature",
                            properties: {
                                confirmed: 20505,
                                deaths: 666,
                                recovered: 6415,
                                active: 13424,
                            },
                            geometry: {
                                type: "Point",
                                coordinates: [125.6, 10.1]
                            }
                        },
                        {
                            type: "Feature",
                            properties: {
                                confirmed: 20505,
                                deaths: 666,
                                recovered: 6415,
                                active: 13424,
                            },
                            geometry: {
                                type: "Point",
                                coordinates: [125.6, 10.1]
                            }
                        },
                    ]
                };
                map.addSource('covid', {
                    type: 'geojson',
                    data: cases
                });

                map.addLayer({
                    id: 'covid',
                    type: 'circle',
                    source: 'covid',
                    layout: {},
                    paint: {
                        "circle-radius": {
                            property: 'deaths',
                            type: 'exponential',
                            stops: [
                                ['deaths', 3000],
                            ],
                            base: 2
                        },
                        'circle-color': 'red',
                        'circle-opacity': 0.4
                    }
                });
                /*  const population = JSON.parse(befolkning);
                 map.addSource('population', {
                     type: 'geojson',
                     data: population
                 });

                 const features = population.features;
                 let min = 999999;
                 let max = -999999;
                 for (let i = 0; i < features.length; i++) {
                     console.log(features[i].pop_tot)
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
                 }); */
                setMap(map);
                map.resize();

                const marker = new mapboxgl.Marker()
                    .setLngLat([30.5, 50.5])
                    .addTo(map);
            });
        };

        if (!map) initializeMap({ setMap, mapContainer });


    }, [map]);

    return <div ref = { el => (mapContainer.current = el) }
    style = { styles }
    />;
};

export default MapboxGLMap;