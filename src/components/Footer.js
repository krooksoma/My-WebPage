import React from "react";
import Order from "./Order";

function Footer() {
  const hourNow = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hourNow >= openHour && hourNow <=closeHour;

  //the second argument null is for props
  //
  return (
    <footer>
      <div className="container">
      <h4 className="mt-3 text-danger">
        Mama Mia Pizza pizza pizza!!!
      </h4>
      


      {isOpen ? (
        <Order name={openHour}/>
        ) : 
        <p>
          Sorry! We'are closed. Come back tomorrow after {openHour}:00!
          </p>}
      </div>      
    </footer>
  );
}

export default Footer;
