import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const MonthCarousel = () => {
  return (
    <div className="d-flex justify-content-center m-15" style={{height:'100px'}}>
      <div id="carouselExampleControls" className="carousel slide w-50" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100px' }}>
              January
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100px' }}>
              February
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100px' }}>
              March
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span style={{backgroundColor:'black',color:'white'}} className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden" >Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span style={{backgroundColor:'black',color:'white'}} className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden" >Next</span>
        </button>
      </div>
    </div>
  );
}

export default MonthCarousel;
