import React from 'react';
import { Link } from 'react-router-dom';
import '../Banner/Banner.css'
const Banner = () => {
  return (
    <div>
      <div className=" banner  mt-5">
        <div className="container ">
          <div className="row g-4  mt-5">
           <div className="col-lg-6 text-start text-light">
           <div className="banner-details">
           <h1 className="text-capitalize">Tourism is travel for pleasure or business; also the theory and practice of touring, the business of attracting tour....!</h1>
           <Link to='/offers'><button type="button" className="btn btn-danger mt-3"><i className="fas fa-location-arrow"></i> Book Now</button></Link>
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;