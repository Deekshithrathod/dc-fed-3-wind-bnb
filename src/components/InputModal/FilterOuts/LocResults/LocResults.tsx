import "./LocResults.css";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { showLocSearchResults } from "../../../../atoms/showFilterResults";
import { filteredLocSearchResults } from "../../../../atoms/searchResults";
import LocationFilterResult from "./LocationFilterResult/LocationFilterResult";
import { selectedCity, selectedCountry } from "../../../../atoms/filters";

const LocResults = ({ toggle }: { toggle: Function }) => {
  const showLocResults = useRecoilValue(showLocSearchResults);
  const searchResults = useRecoilValue(filteredLocSearchResults);

  const setSelectedCity = useSetRecoilState(selectedCity);
  const setSelectedCountry = useSetRecoilState(selectedCountry);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log(`Clicked`);
    // console.log(e.target);
    const locVal = (e.target as HTMLElement)
      .closest("div.loc-result")
      ?.getAttribute("data-loc");
    if (locVal) {
      const sp = locVal.split("|").slice(0, 2);

      setSelectedCity(sp[0]);
      setSelectedCountry(sp[1]);

      toggle(false);
    }
  };
  const Results = () => {
    return (
      <>
        {searchResults.map((res, i) => (
          <LocationFilterResult {...res} key={i} />
        ))}
      </>
    );
  };
  return (
    <div className="location-results" onClick={handleClick}>
      {showLocResults && <Results />}
    </div>
  );
};

export default LocResults;
