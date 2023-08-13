import PlaceIcon from "@mui/icons-material/Place";

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
