import React, { Component, useEffect, useRef } from 'react';
import {
    MapContainer, TileLayer, Marker, Popup, useMapEvent, useMap
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
    console.log(position);

    function ResetView({ coords }) {
        const map = useMap();
        map.setView([coords[0], coords[1]], map.getZoom());
        return null;
    }

    const greenIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

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
                        position={[item.latitude, item.longitude]}
                        icon={greenIcon}
                    >
                        <Popup>
                            Name: {item.name}
                            <br></br>
                            Address: {item.address}
                        </Popup>
                    </Marker>)
            }) : ""}
            <ResetView coords={position} />
        </MapContainer >
    )
}

