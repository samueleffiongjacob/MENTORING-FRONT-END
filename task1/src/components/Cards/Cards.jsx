import React from "react";
const Card = ({ title, subtitle, imgSrc, imgAlt, cardClass }) => {
    return (
      <div className={`card ${cardClass}`}>
        <div className="card-title p-4">
          <h3 className={cardClass}>{title}<br />{subtitle}</h3>
        </div>
        <div className="card-img pup">
          <img 
            src={imgSrc} 
            alt={imgAlt} 
            className="img-fluid"  
          />
        </div>
      </div>
    );
  };


export default Card;