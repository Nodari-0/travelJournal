import React from "react";
import PropTypes from "prop-types";

const Entry = ({ img, title, country, googleMapsLink, dates, text }) => {
  return (
    <div className="entry">
      <img 
        src={img.src} 
        alt={img.alt} 
        className="entry--image"
      />
      <div className="entry--content">
        <div className="entry--location">
          <span className="entry--country">
            <span className="material-icons location-icon">
              location_on
            </span>
            {country}
          </span>
          <a 
            href={googleMapsLink} 
            target="_blank" 
            rel="noreferrer"
          >
            View {title} on Google Maps
          </a>
        </div>
        <h2 className="entry--title">{title}</h2>
        <p className="entry--dates">{dates}</p>
        <p className="entry--text">{text}</p>
      </div>
    </div>
  );
};

Entry.propTypes = {
  img: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  }).isRequired,
  title: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  googleMapsLink: PropTypes.string.isRequired,
  dates: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Entry;
