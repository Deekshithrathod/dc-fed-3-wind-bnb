import "./LocationFilterResult.css";
import PlaceIcon from "@mui/icons-material/Place";
import { ILocSearchResult } from "../../../../../atoms/searchResults";

const LocationFilterResult = ({ city, country }: ILocSearchResult) => {
  return (
    <div className="loc-result" data-loc={`${city}|${country}`}>
      <PlaceIcon />
      <p>
        {city}, {country}
      </p>
    </div>
  );
};

export default LocationFilterResult;
