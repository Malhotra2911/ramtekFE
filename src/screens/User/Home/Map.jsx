import React, { useEffect } from 'react';
import logo from '../../../assets/sideimg.jpeg';
import money from '../../../assets/new1.jpeg';
import slider1 from '../../../assets/new1.jpeg';
import slider2 from '../../../assets/new2.jpeg';
import slider3 from '../../../assets/new3.jpeg';
import slider4 from '../../../assets/new4.jpg';
import slider5 from '../../../assets/new5.jpg';

import ramtek1 from '../../../assets/ramtak1.jpg';
import ramtek2 from '../../../assets/ramtak2.jpg';
import ramtek3 from '../../../assets/ramtak3.jpg';
import ramtek4 from '../../../assets/ramtak4.jpg';
import ramtek5 from '../../../assets/ramtak5.jpg';
import ramtek6 from '../../../assets/ramtak6.jpg';
import { useNavigate } from 'react-router-dom';

import './Map.css';

const Map = () => {
  const navigation = useNavigate();
  return (
    <>
      <div className="main_Map">
        <div className="main_Map_innear">
          <div className="main_Map_innear10">
            <iframe
              className="main_fram_sss"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.6023479012033!2d79.3272843250099!3d21.40555667473091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4d39c832c6117%3A0x2a38ce4ee692eae2!2sC84H%2B5WX%20Shanti%20Nath%20Digamber%20Jain%20Mandir%2C%20Ramtek%2C%20Maharashtra%20441106!5e0!3m2!1sen!2sin!4v1698309720342!5m2!1sen!2sin"
              // style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="main_Map_innear11">
            <h2>पहुचमार्ग</h2>
            <p>
              Address: Shanti Nath Digamber Jain Mandir, Ramtek, Kawadak,
              Maharashtra 441106
            </p>
          </div>
        </div>

        <div className="main_Map_innear">
          <div className="main_Map_innear12">
            <h2>अतिशय</h2>
            <p>
              Address: Shanti Nath Digamber Jain Mandir, Ramtek, Kawadak,
              Maharashtra 441106
            </p>
          </div>
          <div className="main_Map_innear13">
            <img
              src={ramtek1}
              alt="d"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </div>

      <div className="main_text_div_hai_na">
        <div className="main_text_div_hai_na1">
          <h2>नित्य कार्यक्रम</h2>
          <p>” मोक्षमार्ग तो, भीतर अधिक है, बाहर कम</p>
        </div>
        <div className="main_text_div_hai_na12">
          <h2>
            Address: Shanti Nath Digamber Jain Mandir, Ramtek, Kawadak,
            Maharashtra 441106
          </h2>
        </div>
        <div className="main_bri_aur_pade">
          <button> और पढ़ें</button>
        </div>
        <div className="main_text_div_hai_na1">
          <h2>फोटो गैलरी</h2>
          <p>” मोक्षमार्ग तो, भीतर अधिक है, बाहर कम</p>
        </div>
        <div className="main_gallery">
          <img src={ramtek1} alt="dd" />
          <img src={ramtek2} alt="dd" />
          <img src={ramtek3} alt="dd" />
          <img src={ramtek5} alt="dd" />
          {/* <img src={slider2} alt="dd" />
          <img src={slider3} alt="dd" />
          <img src={slider1} alt="dd" />
          <img src={slider2} alt="dd" /> */}
        </div>
      </div>
    </>
  );
};

export default Map;
