import { useRecoilValue } from "recoil";
import LocationFilterResult from "../LocationFilterResult/LocationFilterResult";
import "./LocResults.css";
import { filteredLocResults } from "../../../../atoms/filters";

const LocResults = () => {
  const locResultsList = useRecoilValue(filteredLocResults);
  return (
    <div className="location-results">
      {locResultsList.map((res, index) => (
        <LocationFilterResult
          place={res.city}
          country={res.country}
          key={index}
        />
      ))}
    </div>
  );
};

export default LocResults;
