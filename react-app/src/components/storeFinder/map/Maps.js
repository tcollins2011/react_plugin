import React, {useState} from 'react';
import {GoogleMap, withGoogleMap, Marker, InfoWindow } from "react-google-maps"
import mapStyles from "./mapStyles"
import storeJson from "../locations/storeJson"
import './MapStyle.css'

export default function Maps(props) {
  const zoom = parseInt(props.zoom)
  const center = props.center
  const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true
  }
  function Map() {
    const[selectedStore, setSelectedStore] = useState(null)
    return(
        <GoogleMap 
        defaultZoom={zoom} 
        defaultCenter={{lat: center.lat, lng: center.lng}}
        options={options}
        >
        {storeJson.map((coordinates) => (
          <Marker
            key={coordinates.id}
            position={{ lat: coordinates.lat, lng: coordinates.lng }}
            onClick={() => {
              setSelectedStore(coordinates)
            }}
          >
            {selectedStore && selectedStore.id === coordinates.id && (
           <InfoWindow onCloseClick={() => setSelectedStore(null)}
           >
             <div className='infoWindow'>
               <img className='storeImage' src={selectedStore.exteriorStore} alt=''></img>
               <img className='storeLogo' src={selectedStore.logoPinch} alt=''></img>
               <h4 id='address'>{selectedStore.address1}</h4>
               <h4 id='address'>{selectedStore.address2}</h4>
               <h3 className='phone'>{selectedStore.phone}</h3>
               {/* <h3 className='phone'><a className='phoneLink' href={selectedStore.phone}>{selectedStore.phone}</a></h3> */}
             </div>
           </InfoWindow>
         )}
          </Marker>
        ))}
        </GoogleMap>
    )
}
  
   const WrappedMap = withGoogleMap(Map);
    return(
            <WrappedMap 
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
            loadingElement={<div style={{height: props.windowSize}}/>}
            containerElement={<div style={{height: props.windowSize}}/>}
            mapElement={<div style={{height: props.windowSize}}/>}
            className='stickyMap'
            />  
    )
}

