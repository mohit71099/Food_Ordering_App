import {CDN_URL} from "../../utils/constants";

const Resturantcard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } = resData?.info;
    return (
      <div className="res-card">
        <img
          className="res-logo"
          src={
            CDN_URL + cloudinaryImageId
          }
          alt="res-image"
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating}</h4>
        <h4>{sla.deliveryTime} mins</h4>
        <h4>{costForTwo}</h4>
      </div>
    );
  };

export default Resturantcard;
