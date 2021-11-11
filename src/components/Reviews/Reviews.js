import React from 'react';
import Rating from 'react-rating';
import './Reviews.css'
const Reviews = () => {
  return (
    <div className='reviews my-5'>
      <div className="container-fluid">
        <div className="row ">
        <div className="col-lg-6 review-img p-0">
            <img className='' src="https://images.unsplash.com/photo-1606820854416-439b3305ff39?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80" alt="" />
          </div>
        <div className="col-lg-6 slide p-0">
           <div className="review-img-2 ">
           <div className="reviews-title text-light pt-5">
           <h1>Our Top Reviews</h1>
           </div>
           
  {/* here reviews slider */}
  <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <div className="reviews-details  text-light">
             <h4>Panama</h4>
             <Rating className='rating text-warning'
                 emptySymbol="far fa-star "
                 fullSymbol="fas fa-star "
                 readonly
                 initialRating={4.5}
                  > 
            </Rating> 
            <p>When it comes to exploring exotic places, the choices are numerous. Whether you like peaceful destinationWhen it comes to exploring exotic places, the choices are numerous. Whether you like peaceful destinations or vibrant landscapes, we have offers for you.</p>
            <br />
            <h4>Saif Al Siam</h4>
            <img className='customer-img' src="https://scontent.fdac13-1.fna.fbcdn.net/v/t1.6435-9/121493579_1278645865832771_9088112916121303344_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeELdIcBeEuzaEZvcTcfPol2nKyNukv07FacrI26S_TsVmZOyCJDzkchpYkwnetKwj6wS7CQ0sgKWO8E_c6sF-ua&_nc_ohc=C_nzvH_Zz5cAX-dWq3o&_nc_ht=scontent.fdac13-1.fna&oh=b05f827042b7cc9f98eacc7b412d3a92&oe=61B2C857" alt="" />
             </div>
    </div>
    <div className="carousel-item">
    <div className="reviews-details text-light">
            
             <h4>japan</h4>
             <Rating className='rating text-warning'
                 emptySymbol="far fa-star "
                 fullSymbol="fas fa-star "
                 readonly
                 initialRating={4}
                  > 
            </Rating> 
            <p>When it comes to exploring exotic places, the choices are numerous. Whether you like peaceful destinationWhen it comes to exploring exotic places, the choices are numerous. Whether you like peaceful destinations or vibrant landscapes, we have offers for you.</p>
            <br />
            <h4> paula bertu</h4>
            <img className='customer-img' src="https://images.unsplash.com/photo-1620075225255-8c2051b6c015?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=894&q=80" alt="" />
             </div>
    </div>
    <div className="carousel-item">
    <div className="reviews-details text-light">
            
             <h4>France</h4>
             <Rating className='rating text-warning'
                 emptySymbol="far fa-star "
                 fullSymbol="fas fa-star "
                 readonly
                 initialRating={4}
                  > 
            </Rating> 
            <p>When it comes to exploring exotic places, the choices are numerous. Whether you like peaceful destinationWhen it comes to exploring exotic places, the choices are numerous. Whether you like peaceful destinations or vibrant landscapes, we have offers for you.</p>
            <br />
            <h4>Adam zampa</h4>
            <img className='customer-img' src="https://images.unsplash.com/photo-1623605931891-d5b95ee98459?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=894&q=80" alt="" />
             </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
           </div>

           {/* slider under */}
          
          </div>
         
         
        </div>
      </div>
    </div>
  );
};

export default Reviews;