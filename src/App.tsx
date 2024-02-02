import { useState } from "react";
import "./App.css";
import Map from "./components/Map/Map";
import SearchBox from "./components/SearchBox/SearchBox";
export interface IPData {
  ip: string;
  location: Location;
  as: AutonomousSystem;
  isp: string;
  proxy: ProxyInfo;
}

interface Location {
  country: string;
  region: string;
  city: string;
  lat: number;
  lng: number;
  postalCode: string;
  timezone: string;
  geonameId: number;
}

interface AutonomousSystem {
  asn: number;
  name: string;
  route: string;
  domain: string;
  type: string;
}

interface ProxyInfo {
  proxy: boolean;
  vpn: boolean;
  tor: boolean;
}

function App() {
  const [searchResults, setSearchResults] = useState<IPData | undefined>(
    undefined
  );

  return (
    <>
      <div className="container">
        <SearchBox
          setSearchResults={setSearchResults}
          searchResults={searchResults}
        />
        <Map searchResults={searchResults} />
      </div>
    </>
  );
}

export default App;
