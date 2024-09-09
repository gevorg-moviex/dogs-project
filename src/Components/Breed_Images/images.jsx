import "./images.css";
import { useState } from "react";

export default function BreedImages({ breedInfo, actives }) {

  return (
    <div className="breed-img">
      {actives.length > 0 ? (
        actives.map((breed, index) => (
          <div key={index} className="breed-section">
            <h2>{breed}</h2>
            <div className="breed-images">
              {(breedInfo[breed] || []).slice(0,5).map((image, imgIndex) => (
                <img
                  key={imgIndex}
                  src={image}
                  style={{ width: '140px', height: '140px', margin: '5px', objectFit: 'cover' }}
                />
              ))}
            </div>
          </div>
        ))
      ) : (
        <p>Loading... <i class="fa-solid fa-spinner"></i></p>
      )}
    </div>
  );
  
}
