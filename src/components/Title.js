// Title.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faL,
  faA,
  faN,
  faA as faA2,
  faS,
} from '@fortawesome/free-solid-svg-icons';
import {
  faB,
  faE,
  faD,
  faF,
  faO as faO1,
  faR,
  faH,
  faO as faO2,
  faP,
  faE as faE2,
} from '@fortawesome/free-solid-svg-icons';
import './Title.css';


const Title = () => {
  return (
    <div className="title-container">
      <div className="title-letter">
        <FontAwesomeIcon icon={faL} />
      </div>
      <div className="title-letter">
        <FontAwesomeIcon icon={faA} />
      </div>
      <div className="title-letter">
        <FontAwesomeIcon icon={faN} />
      </div>
      <div className="title-letter">
        <FontAwesomeIcon icon={faA2} />
      </div>
      <div className="title-letter">
        <FontAwesomeIcon icon={faS} />
      </div>
      <div className="title-letter">
        <FontAwesomeIcon icon={faB} />
      </div>
      <div className="title-letter">
        <FontAwesomeIcon icon={faE} />
      </div>
      <div className="title-letter">
        <FontAwesomeIcon icon={faA2} />
      </div>
      <div className="title-letter">
        <FontAwesomeIcon icon={faD} />
      </div>
      <div className="title-letter">
        <FontAwesomeIcon icon={faS} />
      </div>
      <div className="title-letter">
        <FontAwesomeIcon icon={faF} />
      </div>
      <div className="title-letter">
        <FontAwesomeIcon icon={faO1} />
      </div>
      <div className="title-letter">
        <FontAwesomeIcon icon={faR} />
      </div>
      <div className="title-letter">
        <FontAwesomeIcon icon={faH} />
      </div>
      <div className="title-letter">
        <FontAwesomeIcon icon={faO2} />
      </div>
      <div className="title-letter">
        <FontAwesomeIcon icon={faP} />
      </div>
      <div className="title-letter">
        <FontAwesomeIcon icon={faE2} />
      </div>
      
    </div>
  );
};

export default Title;
