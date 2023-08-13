import PlaceIcon from "@mui/icons-material/Place";
import "./LocationFilterResult.css";

const LocationFilterResult = ({
  place,
  country,
}: {
  place: string;
  country: string;
}) => {
  return (
    <div className="loc-result">
      <PlaceIcon />
      <p>
        {place}, {country}
      </p>
    </div>
  );
};

export default LocationFilterResult;
