import { ISearchResult } from "../../../../atoms/searchResults";
import "./SearchResult.css";
import StarIcon from "@mui/icons-material/Star";

const SearchResult = ({
  superHost,
  rating,
  beds,
  type,
  title,
  photo,
}: ISearchResult) => {
  return (
    <div className="stay-card">
      <div className="stay-img">
        <img src={photo} alt="image of a stay" />
      </div>
      <div className="stay-info">
        <div className="first-row">
          <div className="stay-details">
            {superHost && <div className="superhost-badge">Super Host</div>}
            <div className="stay-apt">
              {type}
              {beds !== null ? ` . ${beds} beds` : ``}
            </div>
          </div>
          <div className="rating">
            <StarIcon style={{ color: `#EB5757` }} />
            <span>{rating.toFixed(1)}</span>
          </div>
        </div>
        <div className="second-row">{title}</div>
      </div>
    </div>
  );
};

export default SearchResult;
