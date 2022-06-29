import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import "leaflet/dist/leaflet.css";



export default function Map() {
    const position = [51.505, -0.09]
    const multiPolygon = [

        [51.51, -0.12],
        [51.51, -0.13],
        [51.53, -0.13],
    ]

    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer >
    )
}

