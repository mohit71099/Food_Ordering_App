import Resturantcard from "./Resturantcard";
import resList from "../../utils/mockdata";
import { useState } from "react";



const Body = () => {
     //State variable - Powerful variable
     const [listofResturant,setListofResturant] = useState(resList);

    return (
      <div className="body">
        <div className="fliter">
          <button className="filter-btn" 
          onClick={()=>{
              const filteredList = listofResturant.filter((res)=>{
                return res.info.avgRating > 4.3;
              });
              setListofResturant(filteredList); 
             }}     >
            Top Rated Restaurant
          </button>
        </div>
        <div className="res-container">
          {listofResturant.map((resturanat) => (
            <Resturantcard key={resturanat.info.id} resData={resturanat} />
          ))}
        </div>
      </div>
    );
  };

export default Body;
   