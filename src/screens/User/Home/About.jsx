import React, { useEffect } from 'react';
import logo from '../../../assets/sideimg.jpeg';
import money from '../../../assets/money.jpeg';
import { useNavigate } from 'react-router-dom';
import './About.css';
const About = () => {
  const navigation = useNavigate();
  return (
    <>
      <div>
        <div className="mainbghomediv">
          <div className="home-left-img">
            <iframe
              className="home-left-img-video-ifram"
              src="https://www.youtube.com/embed/FDsPVon7W8U"
            ></iframe>
          </div>
          <div className="home-right-text">
            <div>
              <h2>
                श्री दिगम्बर जैन अतिशय
                <br />
                क्षेत्र रामटेक नागपुर महाराष्ट्र (अतिशय क्षेत्र)
              </h2>
              <div className="linnes-outer-div-main">
                <p>
                  Address: Ramtek Shri Shantinath Digambar Jain Mandir - Nagpur
                  <br />
                  District, Maharashtra, India (श्री शांतीनाथ दिगंबर जैन मंदिर)
                  <br />
                  {/* District India, Pincode : 491445 Rajnandgaon, State :
                  CHHATTISGARH, Country */}
                </p>
              </div>
              <div className="main-start-btn-div">
                <button
                  onClick={() => navigation('/donation')}
                  className="donation-now-btn"
                >
                  और पढ़ें
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
