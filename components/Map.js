import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import { useState } from 'react';

//  Create the Icon


export default function Map({ data, listCount }) {
    const position = [51.505, -0.09]
    const multiPolygon = [

        [51.51, -0.12],
        [51.51, -0.13],
        [51.53, -0.13],
    ]
    console.log(data);

    L.Icon.Default.imagePath = "/../public/images/"
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
        </MapContainer >
    )
}

