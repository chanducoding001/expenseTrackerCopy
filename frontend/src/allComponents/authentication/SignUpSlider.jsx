
import Carousel from 'react-bootstrap/Carousel';


function SignUpSlider() {
  return (
    <div className='carousel-container'>
      <Carousel slide={false}  controls={true}>
      <Carousel.Item>
        <img
          // src="https://via.placeholder.com/800x400?text=Third+Slide"
          src='/images/expenseImages/slider1.jpg'
          alt="First slide"
          width='100%'
          height='100%'
        />
        <Carousel.Caption>
          <h3 className='carousel-heading'>Gain total control of your money</h3>
          <p className='carousel-text'>Become your own money manager and make every cent count</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          // src="https://via.placeholder.com/800x400?text=Third+Slide"
          src='/images/expenseImages/slider2.png'
          alt="Second slide"
          width='100%'
          height='100%'
        />
        <Carousel.Caption>
          <h3 className='carousel-heading'>Know where your money goes</h3>
          <p className='carousel-text'>Track your transaction easily with categories and financial report</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          // src="https://via.placeholder.com/800x400?text=Third+Slide"
          src='/images/expenseImages/slider3.jpg'
          alt="Third slide"
          width='100%'
          height='100%'
        />
        <Carousel.Caption>
          <h3 className='carousel-heading'>Planning ahead</h3>
          <p className='carousel-text'>
            Set up your budget for each category so you in control
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    
  );
}

export default SignUpSlider;