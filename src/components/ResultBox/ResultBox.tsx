import { IPData } from "../../App";
import "./ResultBox.scss";
type Props = {
  searchResults: IPData | undefined;
};

export default function ResultBox({ searchResults }: Props) {
  return (
    <div className="container-box result-box">
      <div className="container-box__item">
        <h3 className="label-box dark-grey-color">IP ADDRESS</h3>
        {searchResults ? (
          <p
            className="
           content-box
          "
          >
            {searchResults?.ip}
          </p>
        ) : (
          <p className="content-box"> No IP</p>
        )}
      </div>
      <div className="separator"></div>
      <div className="container-box__item">
        <h3 className=" label-box dark-grey-color">LOCATION</h3>
        {searchResults ? (
          <p className="content-box">{searchResults?.location.region}</p>
        ) : (
          <p
            className="
         content-box
        "
          >
            {" "}
            No Adress
          </p>
        )}
      </div>
      <div className="separator"></div>

      <div className="container-box__item">
        <h3 className=" label-box dark-grey-color">TIMEZONE</h3>
        {searchResults ? (
          <p className="content-box">UTC {searchResults?.location.timezone}</p>
        ) : (
          <p className="content-box "> No Adress</p>
        )}
      </div>
      <div className="separator"></div>

      <div className="container-box__item">
        <h3 className=" label-box dark-grey-color">ISP</h3>
        {searchResults ? (
          <p
            className="
            content-box
           "
          >
            {" "}
            {searchResults?.isp}
          </p>
        ) : (
          <p
            className="
     content-box
    "
          >
            {" "}
            No ISP
          </p>
        )}
      </div>
    </div>
  );
}
