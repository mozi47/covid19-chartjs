import React from 'react'
import GoogleMapReact from 'google-map-react';

const Map = () => {
    return (
        <div className="map" style={{ height: '100vh', width: '100%'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: /*YOUR KEY*/ }}
                    defaultCenter={{lat: 59.95,lng: 30.33}}
                    defaultZoom={11}
                >
                {/*<AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                />*/}
                </GoogleMapReact>
        </div>
    )
}

export default Map
