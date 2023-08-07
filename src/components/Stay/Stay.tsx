import StarIcon from "@mui/icons-material/Star";
import "./Stay.css";

type stayInfo = {
  city?: string;
  country?: string;
  superHost?: boolean;
  title: string;
  rating: number;
  maxGuests: number;
  type: string;
  beds?: number | null;
  photo: string;
};

const Stay = ({ superHost, rating, beds, type, title, photo }: stayInfo) => {
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
            <span>{rating}</span>
          </div>
        </div>
        <div className="second-row">{title}</div>
      </div>
    </div>
  );
};

export default Stay;
