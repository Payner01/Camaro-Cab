import React from 'react';
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "google-maps-react";

const SchedulePage = (props) => {
    
    const [user, token] = useAuth();
    const { isLoaded } = useLoadScript({googleMapsApiKey: ""})

    if (!isLoaded) return <div>Loading...</div>;
    

    return ( 
        <div>
            <h1>Hello Schedule Page</h1>
            <GoogleMap 
            zoom={10}
            center={{ lat: 44, lng: -80 }}
            mapContainerClassName="map-container">

            </GoogleMap>
        </div>
     );
}
 
export default SchedulePage;