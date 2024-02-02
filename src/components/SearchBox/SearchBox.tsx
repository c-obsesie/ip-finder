import { useState } from "react";
import "./SearchBox.scss";
import ResultBox from "../ResultBox/ResultBox";
import { IPData } from "../../App";

type Props = {
  searchResults: IPData | undefined;
  setSearchResults: (searchResults: IPData) => void;
};

export default function SearchBox({ setSearchResults, searchResults }: Props) {
  const [search, setSearch] = useState<string>("");

  const handleSearch = async () => {
    try {
      const res = await fetch(
        `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_plIU8LKjLVibCL7WKc9tdsJGy3CFg&ipAddress=${search}`
      );

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      setSearchResults(data);
    } catch (error) {
      console.error("Error during fetch:", error);
      alert("Oups there was an error, please be sure you entered a valid IP");
    }
  };

  return (
    <div className="hero-section">
      <div className="searchbox-container">
        <label className="search-label" htmlFor="search">
          IP Address Tracker
        </label>
        <div className="d-flex mt-20">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for any IP adress or doamin"
            name="search"
            className="input-search"
          />

          <button className="button" onClick={handleSearch}>
            {">"}
          </button>
        </div>
      </div>
      <ResultBox searchResults={searchResults} />
    </div>
  );
}
