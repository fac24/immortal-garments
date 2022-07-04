import React, { Component, useEffect, useRef } from 'react';
import {
    MapContainer, TileLayer, Marker, Popup, useMapEvent
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import * as L from 'leaflet';
import 'leaflet-defaulticon-compatibility';

export default function Map({ data, listCount, userPosition }) {


    let position = [51.5007, -0.1246];
    if (userPosition !== null) {
        position = [userPosition.result.latitude, userPosition.result.longitude];
    }

    function SetViewOnClick() {
        const map = useMapEvent('click', (e) => {
            map.setView(position, map.getZoom(), {
            })
        })
        return null
    }
    const animateRef = useRef(true);
    // console.log(userPosition);
    // const [position, setPosition] = useState([51.5007, -0.1246])
    // if (userPosition !== null) {
    //     setPosition[userPosition.result.latitude, userPosition.result.longitude];
    // }
    // console.log(position);


    // function SetViewOnClick() {
    //     const map = useMapEvent();
    //     useEffect(() => {
    //         map.setView(position, map.getZoom(), {
    //         })
    //     }, [position])

    //     return null
    // }

    // L.Icon.Default.imagePath = "/../public/images/marker-icon-2x.png"
    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    You are here.
                </Popup>
            </Marker>
            {data ? data.map((item, index) => {
                if (index < listCount) return (
                    <Marker
                        key={item.id}
                        position={[item.latitude, item.longitude]}>
                        <Popup>
                            Name: {item.name}
                            <br></br>
                            Address: {item.address}
                        </Popup>
                    </Marker>)
            }) : ""}
            <SetViewOnClick />
        </MapContainer >
    )
}

