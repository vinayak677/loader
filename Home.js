import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './component/Footer';
import Form from './component/Form';
import Navbar from './component/Navbar';
import HomeCarousel from './HomeCarousel'
import Product from './component/Product';
import Loader from './component/Loader';

const Home = () => {
const [loading,setLoading] = useState(true);

setTimeout(function(){ 
  setLoading(false); }, 600);
  
  return (
    <div>
      { loading ? <div> <Loader/> </div> : <div>
      <Navbar/>
      <HomeCarousel />
      <div className='container'>
        <div className='row my-5'>
          <div className='col-12 col-md-6 '>
            <div className="row d-flex justify-content-center">
              <div className="col-10 introbg">
                <img src="./assets/img/introsec.jpg" alt="" className="img-fluid intro-img" />
              </div>
            </div>

          </div>
          <div className='col-12 col-md-6 fs18 '>
            <div className='text-justify'>
              <p><span className='vencer_name'>Vencer</span> Paints is a Mumbai based paint manufacturer. We manufacture and markets wide range products for exterior and interior painting requirements. Our product portfolio include items like Paint, Distemper, primer, Emulsion, putty etc.</p>
              <p>We foresee to become one of the leaders in paint industry by offering a quality product at affordable prices.</p>
              <p>Established in 2021, Vencer paints is a backward integration effort by Top level Leaders Ramaprasad Rao, Muralidhar Pyati, Mruthyunjaya K Konanur, A S Narayana Sharma, Shivanandam. Our production team is manned by experienced, qualified chemists and engineers. Our Emphasis is on consistent good quality. We pay the highest regard to the health and safety of those using our products and the environment in which they live and work. We assure you with our Quality with most competitive rates.</p>
            </div >
            <Link className="btn btn-lg btn-magenta mt-4 wow animate__animated animate__fadeInUp bs" to="/About"> Read More</Link>
          </div>
        </div>
      </div>
      <div className='fullbg pb-2'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-12'>
              <h2 className='text-white mx-5 text-center mt-5 fs40'>3 EASY STEP TO MAKE YOUR HOME STYLISH</h2>
            </div>
          </div>
          <div className='row mt-3 mb-3'>
            <div className='col-md-4'>
              <div className='row'>
                <div className='col-md-4'>
                  <h1 className='ml-5 fs60'>1</h1>
                </div>

                <div className='col-md-8'>
                  <h4>CHOOSE FROM COLOUR PALLATE</h4>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='row'>
                <div className='col-md-4'>
                  <h1 className='ml-5 fs60'>2</h1>
                </div>

                <div className='col-md-8'>
                  <h4>CHOOSE OUR PRODUCTS</h4>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='row'>
                <div className='col-md-4'>
                  <h1 className='ml-5 fs60'>3</h1>
                </div>

                <div className='col-md-8'>
                  <h4>GET FREE QUOTE</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className='row'>
        <div className='col'>
          <h1 className='my-5 d-flex justify-content-center'>LET’S MAKE YOUR HOME COLOUR FULL</h1>
        </div>
      </div>

      <div className='row' >

        <div className='col-6 col-md-3 firstcvr1 '>
        </div>
        <div className='col-6 col-md-3 bg_green h350 d-flex align-item-center'>
          <div className='row'>
            <div className='col-12 d-flex align-items-end'>
              <h2 className=''>THE INSPIRATOR</h2>
            </div>
            <div className=''>
              <Link className="btn btn-lg btn-magenta my-2 ml-3 wow animate__animated animate__fadeInUp bs decoration" to=""> Read More</Link>
            </div>
          </div>
        </div>

        <div className='col-6 col-md-3 firstcvr2'>
        </div>
        <div className='col-6 col-md-3 bg_orange h350 d-flex align-item-center'>
          <div className='row'>
            <div className='col-12 d-flex align-items-end'>
              <h2 className=''>THE INSPIRATOR</h2>
            </div>
            <div className=''>
              <Link className="btn btn-lg btn-magenta my-2 ml-3 wow animate__animated animate__fadeInUp bs" to=""> Read More</Link>
            </div>
          </div>
        </div>
      </div>


      <div className='row' >

        <div className='col-6 col-md-3 firstcvr3 '>
        </div>
        <div className='col-6 col-md-3 bg_purple h350 d-flex align-item-center'>
          <div className='row'>
            <div className='col-12 d-flex align-items-end'>
              <h2 className=''>THE INSPIRATOR</h2>
            </div>
            <div className=''>
              <Link className="btn btn-lg btn-magenta my-2 ml-3 wow animate__animated animate__fadeInUp bs" to=""> Read More</Link>
            </div>
          </div>
        </div>

        <div className='col-6 col-md-3 firstcvr4'>
        </div>
        <div className='col-6 col-md-3 bg_grey h350 d-flex align-item-center'>
          <div className='row'>
            <div className='col-12 d-flex align-items-end'>
              <h2 className=''>THE INSPIRATOR</h2>
            </div>
            <div className=''>
              <Link className="btn btn-lg btn-magenta my-2 ml-3 wow animate__animated animate__fadeInUp bs " to=""> Read More</Link>
            </div>
          </div>
        </div>
      </div>
      <Product/>
      <Form/>
      <Footer/>
      </div>
  }
    </div>
  )
}

export default Home