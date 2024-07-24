import React from "react";
import ReactDOM from "react-dom/client";
import img from "./logo.png";

/**
 * Header
 *  - Logo
 *  - Nav items
 *  -
 * Body
 *  - Search
 *  - Resturants contaniner
 *      - Resturantcard
 * Footer
 *  -Copyright
 *  -Links
 *  -Address
 *  -Contact
 * 
 */
const Header = () =>{
    return(
        <div className="header">
          <div className="logo-container">
          <img className="logo" src={img}/>
          </div>
          <div className="nav-items">
              <ul>
                 <li>Home</li>
                 <li>About Us</li>
                 <li>Contact Us</li>
                 <li>Cart</li>
              </ul>
          </div>
        </div>
    );
};

const AppLayout = () => {
  return(
    <div className="app">
    <Header/>
    {body}
    </div>
  )

};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);