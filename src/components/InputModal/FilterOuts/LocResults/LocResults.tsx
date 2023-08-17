import "./LocResults.css";
import { useRecoilValue } from "recoil";
import { showLocSearchResults } from "../../../../atoms/filterResults";

const LocResults = () => {
  const showLocResults = useRecoilValue(showLocSearchResults);

  return <div className="location-results">{showLocResults && "safs"}</div>;
};

export default LocResults;
