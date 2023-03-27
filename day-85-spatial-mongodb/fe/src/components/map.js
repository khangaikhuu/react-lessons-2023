import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useContext } from "react";
import { RestaurantContext } from "../context/restaurtants.context";

export default function Map() {
  const restaurants = useContext(RestaurantContext);
  console.log(restaurants[0]?.address.coord.reverse());

  return (
    <div>
      <h1>My Map</h1>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        {restaurants.map((r) => {
          return (
            <Marker position={[r?.address.coord[1], r?.address.coord[0]]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
