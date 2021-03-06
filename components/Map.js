import React, { Component, useEffect, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"; // Re-uses images from ~leaflet package
import * as L from "leaflet";
import "leaflet-defaulticon-compatibility";
import { useRouter } from "next/router";

export default function Map({ data, listCount, userPosition }) {
  console.log(data);
  const router = useRouter();

  //initialises user position at Big Ben but updates when a postcode is searched
  let position = [51.5007, -0.1246];
  if (userPosition !== null) {
    position = [userPosition[0], userPosition[1]];
  }
  let externalLocation = [];
  let externalAddress;

  //this function recentres the map in response to a new user search
  function ResetView({ coords }) {
    const map = useMap();
    map.setView([coords[0], coords[1]], map.getZoom());
    return null;
  }

  //creates a green icon that overrides the default blue for markers that don't represent the user
  const violetIcon = new L.Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      className="flex"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>You are here.</Popup>
      </Marker>
      {data
        ? data.map((item, index) => {
            //uses router to check page and decides how to access coordinates and address from API
            //this is needed because the yelp (tailors, donate) and valpak (recycle) APIs return the coordinates and address at different nesting levels
            if (router.pathname.includes("/recycle")) {
              externalLocation = [item.latitude, item.longitude];
              externalAddress = item.address;
            } else {
              externalLocation = [
                item.coordinates.latitude,
                item.coordinates.longitude,
              ];
              externalAddress = `${item.location.address1}${
                item.location.address2 ? `, ${item.location.address2}` : ""
              }${item.location.zip_code ? `, ${item.location.zip_code}` : ""}`;
            }
            if (index < listCount)
              return (
                <Marker
                  key={item.id}
                  position={externalLocation}
                  icon={violetIcon}
                >
                  <Popup>
                    Name: {item.name}
                    <br></br>
                    Address: {externalAddress}
                  </Popup>
                </Marker>
              );
          })
        : ""}
      <ResetView coords={position} />
    </MapContainer>
  );
}
