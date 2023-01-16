import React from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from '../../assets/01_bc244f31-49b0-42ad-b7dc-8e21f9bf57a9_2400x.progressive.png.webp';

const Background = () => {
  const navigate = useNavigate();
  const shopHandler = () => {
    navigate('/products');
  };
  return (
    <div style={{ backgroundImage: `url(${bgImage})` }} className="bg-image">
      <div className="bg-image__item">
        <h6>
          UP TO 50% <br /> OFF ORIGINALS
        </h6>
        <button onClick={shopHandler} className="bg-image__item__button">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Background;
