import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { IPData } from "../../App";
import { useEffect, useState } from "react";

type Props = {
  searchResults: IPData | undefined;
};

export default function Map({ searchResults }: Props) {
  const [coordinates, setCoordinates] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    if (searchResults) {
      setCoordinates([searchResults.location.lat, searchResults.location.lng]);
    }
  }, [searchResults]);
  function ChangeMapView({ coords }: { coords: [number, number] }) {
    const map = useMap();
    map.setView(coords, map.getZoom());

    return null;
  }
  return (
    <div className="leaflet-container">
      <MapContainer
        center={coordinates}
        zoom={13}
        scrollWheelZoom={true}
        style={{ width: "100%", height: "calc(100vh - 282px)" }}
      >
        <ChangeMapView coords={coordinates} />

        <TileLayer
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={coordinates}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
